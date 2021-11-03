import { notification } from 'antd';
import { getFirestore, query, collection, where, getDocs, orderBy } from 'firebase/firestore';

// Query the first page of docs
const getOnlineFalse = async (meritRef, myRegions, myAge) => {
  try {
    const db = getFirestore();

    const setFirstQuery = query(
      collection(db, 'noticeProposal', 'merit', meritRef),
      where('age', 'array-contains', myAge),
      where('region', 'in', myRegions),
      where('online', '==', false),
      orderBy('uploadDate', 'desc')
    );

    const querySnapshot = await getDocs(setFirstQuery);
    console.log(querySnapshot);

    const lists = [];
    querySnapshot.forEach((doc) => {
      lists.push(doc.data());
    });
    // notification['success']({
    //   message: `test 성공✨`,
    //   description: `merit : ${meritRef} ,myRegions:${myRegions}, myAge=${myAge} `,
    // });
    return {
      //   notices: lists,
      //   lastNotice: lastVisible,
      doc: querySnapshot,
    };
  } catch (e) {
    console.log(e);
    notification['error']({
      message: `test 실패😥 `,
      description: e.message || e.code,
    });
    return {
      doc: e,
    };
  }
};

export default getOnlineFalse;
