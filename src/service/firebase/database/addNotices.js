import { notification } from 'antd';
import { doc, setDoc, getFirestore, collection } from 'firebase/firestore';

const addNotice = async () => {
  try {
    const db = getFirestore();
    const newDocRef = doc(collection(db, 'noticeBasics'));
    await setDoc(newDocRef, {
      noticeId: newDocRef.id,
      age: ['adult'],
      merit: 'disaster',
      online: 'false',
      title: '관저다목적체육관 이용자 발열체크 업무 봉사자 모집(토 06~10) ',
      region: '대전',
    });
    return '200ok';
  } catch (e) {
    notification['error']({
      message: `notice 추가 실패😥 `,
      description: e.message || e.code,
    });
    return e;
  }
};

export default addNotice;
