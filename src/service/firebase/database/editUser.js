import { notification } from 'antd';
import { doc, updateDoc, getFirestore } from 'firebase/firestore';

const editUser = async (uid, editData) => {
  try {
    const db = getFirestore();
    const updateUserRef = doc(db, 'members', uid);
    await updateDoc(updateUserRef, editData);
    notification['success']({
      message: `user 정보수정 성공✨ `,
      description: '정보 db에 저장완료',
    });
  } catch (e) {
    notification['error']({
      message: `user 정보수정 실패😥 `,
      description: e.message || e.code,
    });
  }
};

export default editUser;
