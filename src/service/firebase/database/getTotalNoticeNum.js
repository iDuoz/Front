import { notification } from 'antd';
import { doc, getDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const getTotalNoticeNum = async () => {
  try {
    const db = getFirestore();
    const docRef = doc(db, 'noticeInformations', 'noticeTotalNum');
    const docSnap = await getDoc(docRef);
    console.log('TOtalNoticeNum : ', docSnap.data());
    notification['success']({
      message: `getTotalNoticeNum 받아오기 성공✨ `,
      description: 'db에서 noticeTotalNum 받아옴',
    });
    return docSnap.data();
  } catch (e) {
    notification['error']({
      message: `noticeTotalNum 받기실패😥 `,
      description: e.message || e.code,
    });
  }
};

export default getTotalNoticeNum;
