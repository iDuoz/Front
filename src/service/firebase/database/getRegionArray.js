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
    console.log('error DB : ', e);
    return e;
  }
};

export default getRegionArray;
