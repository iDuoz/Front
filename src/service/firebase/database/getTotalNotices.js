import { doc, getDoc } from 'firebase/firestore';
import { collection, getFirestore, query, limit, orderBy, where } from 'firebase/firestore';

const getTotalNotices = async (noticeId) => {
  try {
    const db = getFirestore();
    const docRef = doc(db, 'noticeContainers', noticeId, 'basics', 'listData');
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    // docSnap.forEach((doc) => {
    //   console.log(doc.id, ' => ', doc.data());
    // });
    return docSnap.data();
  } catch (e) {
    console.log('error DB : ', e);
    return e;
  }
};

export default getTotalNotices;
