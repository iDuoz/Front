import { notification } from 'antd';
import { doc, setDoc, getFirestore, collection, updateDoc, increment } from 'firebase/firestore';

const addNotice = async (noticeData) => {
  try {
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);

    let hours = ('0' + today.getHours()).slice(-2);
    let minutes = ('0' + today.getMinutes()).slice(-2);
    let seconds = ('0' + today.getSeconds()).slice(-2);
    const setDocMerit = noticeData.merit || 'online';
    const db = getFirestore();
    const newDocRef = doc(collection(db, 'noticeBasics'));
    await setDoc(newDocRef, {
      noticeId: newDocRef.id,
      age: noticeData.age,
      merit: noticeData.merit || 'online',
      online: Boolean(noticeData.online),
      title: noticeData.title,
      region: noticeData.region,
      url: noticeData.url,
      uploadDate: Number(year + month + day + hours + minutes + seconds),
    })
      .then(async (res) => {
        notification['success']({
          message: `notice 추가 성공✨ `,
          description: 'db notice update 성공',
        });
      })
      .then(async (res) => {
        console.log(noticeData.url);
        await setDoc(doc(db, 'noticeProposal', 'merit', setDocMerit, newDocRef.id), {
          noticeId: newDocRef.id,
          age: noticeData.age,
          merit: noticeData.merit || 'online',
          online: Boolean(noticeData.online),
          title: noticeData.title,
          region: noticeData.region,
          url: noticeData.url,
          uploadDate: Number(year + month + day + hours + minutes + seconds),
        })
          .then((res) => {
            notification['success']({
              message: `notice merit 별 저장 성공✨ `,
              description: 'db  noticeProposal 저장 성공',
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
