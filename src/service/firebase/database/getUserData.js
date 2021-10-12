import { notification } from 'antd';
import { doc, getDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const getUserData = async (userUid) => {
  try {
    const db = getFirestore();
    const docRef = doc(db, 'members', userUid);
    const docSnap = await getDoc(docRef);
    console.log('DB data : ', docSnap.data());
    notification['success']({
      message: `user 정보받아오기 성공✨ `,
      description: 'db에서 user정보 받아옴',
    });
    return docSnap.data();
  } catch (e) {
    notification['error']({
      message: `user 정보받아오기 실패😥 `,
      description: e.message || e.code,
    });
    return e;
  }
};

export default getUserData;
