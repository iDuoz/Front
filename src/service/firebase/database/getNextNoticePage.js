import { notification } from 'antd';
import { getFirestore, query, startAfter, collection, limit, getDocs, orderBy } from 'firebase/firestore';

const getNextNoticePage = async (startVisible) => {
  try {
    const db = getFirestore();

    const setNextQuery = query(collection(db, 'noticeBasics'), orderBy('uploadDate', 'desc'), startAfter(startVisible), limit(5));

    const querySnapshot = await getDocs(setNextQuery);
    const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    console.log('last', lastVisible);

    const lists = [];

    querySnapshot.forEach((doc) => {
      lists.push(doc.data());
    });
    // notification['success']({
    //   message: `다음 페이지 notice받아오기 성공✨`,
    //   description: 'db에서 시간순으로 정렬된 5개의notice받아옴',
    // });
    return {
      notices: lists,
      lastNotice: lastVisible,
    };
  } catch (e) {
    notification['error']({
      message: `다음 페이지 notice받아오기 실패😥 `,
      description: e.message || e.code,
    });
  }
};

export default getNextNoticePage;
