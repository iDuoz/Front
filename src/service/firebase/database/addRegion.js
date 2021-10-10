import { doc, updateDoc, arrayUnion, getFirestore } from 'firebase/firestore';
import { notification } from 'antd';

const addRegion = async (newRegion) => {
  try {
    const db = getFirestore();
    const addRegionRef = doc(db, 'noticeInformations', 'information');
    await updateDoc(addRegionRef, {
      region: arrayUnion(newRegion),
    });
    notification['success']({
      message: `db 지역추가 성공✨ `,
      description: '정보 db에 저장완료',
    });
  } catch (e) {
    notification['error']({
      message: `db 지역추가 실패😥 `,
      description: e.message || e.code,
    });
  }
};

export default addRegion;
