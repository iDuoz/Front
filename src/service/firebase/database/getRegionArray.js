import { notification } from 'antd';
import { doc, getDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const getRegionArray = async () => {
  notification.open({
    message: 'getRegionArray 까지옴',
    description: ' ㅎㅎㅎ',
    icon: '🧡',
  });

  try {
    const db = getFirestore();
    const docRef = doc(db, 'noticeInformations', 'information');
    const docSnap = await getDoc(docRef);
    console.log('DB data : ', docSnap.data());
    notification['success']({
      message: `지역 받아오기 성공✨ `,
      description: '지역을 받아왔습니다!',
    });
    return docSnap.data();
  } catch (e) {
    notification['error']({
      message: `지역 받아오기 실패😥 `,
      description: e.message || e.code,
    });
  }
};

export default getRegionArray;
