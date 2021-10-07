import { notification } from 'antd';
import { doc, getDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const getRegionArray = async () => {
  try {
    const db = getFirestore();
    const docRef = doc(db, 'noticeInformations', 'information');
    const docSnap = await getDoc(docRef);
    console.log('DB data : ', docSnap.data());
    return docSnap.data();
  } catch (e) {
    notification['error']({
      message: `지역 받아오기 실패😥 `,
      description: e.message || e.code,
    });
    return e;
  }
};

export default getRegionArray;
