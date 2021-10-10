import { notification } from 'antd';
import { doc, setDoc, getFirestore, collection, updateDoc, increment } from 'firebase/firestore';

const addNotice = async (noticeData) => {
  try {
    const db = getFirestore();
    const newDocRef = doc(collection(db, 'noticeBasics'));
    await setDoc(newDocRef, {
      noticeId: newDocRef.id,
      age: noticeData.age,
      merit: noticeData.merit,
      online: noticeData.online,
      title: noticeData.title,
      region: noticeData.region,
      url: noticeData.url,
    })
      .then(async (res) => {
        notification['success']({
          message: `notice 추가 성공✨ `,
          description: 'db notice update 성공',
        });
      })
      .then(async (res) => {
        console.log(noticeData.url);
        await setDoc(doc(db, 'noticeContainers', newDocRef.id), {
          url: noticeData.url,
        })
          .then((res) => {
            notification['success']({
              message: `notice url 저장 성공✨ `,
              description: 'db  notice url 저장 성공',
            });
          })
          .catch((e) => {
            console.log(e);
            notification['error']({
              message: `notice url 저장 실패😥 `,
              description: e.message || e.code,
            });
          });
      })
      .then(async (res) => {
        console.log('total Num++');
        await updateDoc(doc(db, 'noticeInformations', 'noticeTotalNum'), {
          count: increment(1),
        })
          .then((res) => {
            notification['success']({
              message: `notice total++  성공✨ `,
              description: 'db  notice total++  성공',
            });
          })
          .catch((err) => {
            notification['error']({
              message: `notice total++  실패😥`,
              description: 'db  notice total++  실패',
            });
          });
      });
  } catch (e) {
    console.log(e);
    notification['error']({
      message: `notice 추가 실패😥 `,
      description: e.message || e.code,
    });
  }
};

export default addNotice;
