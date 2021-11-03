import { notification } from 'antd';
import { getFirestore, query, collection, where, limit, getDocs, orderBy, startAfter } from 'firebase/firestore';

// Query the first page of docs
const getFirstNoticePage = async (next = null) => {
  try {
    const db = getFirestore();

    const setFirstQuery = next
      ? query(
          //   collection(db, 'noticeProposal', 'merit', 'cooking'),
          collection(db, 'noticeBasics'),
          //   where('age', 'array-contains', 'adult'),
          //   where('merit', 'in', ['eco', 'education', 'government', '']),
          //   where('region', '!=', '대구'),
          //   where('online', '==', true),
          orderBy('uploadDate', 'desc'),
          startAfter(next),
          limit(5)
        )
      : query(
          //   collection(db, 'noticeProposal', 'merit', 'cooking'),
          collection(db, 'noticeBasics'),
          //   where('age', 'array-contains', 'adult'),
          //   where('region', 'in', ['부산', '대전']),
          //   where('merit', '==', ''),
          //   where('online', '==', true),
          orderBy('uploadDate', 'desc'),
          limit(5)
        );

    const querySnapshot = await getDocs(setFirstQuery);
    console.log(querySnapshot);
    const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    console.log('last', lastVisible);

    const lists = [];
    querySnapshot.forEach((doc) => {
      lists.push(doc.data());
    });
    // notification['success']({
    //   message: ` 페이지 notice받아오기 성공✨`,
    //   description: 'db에서 시간순으로 정렬된 5개의notice받아옴',
    // });
    return {
      notices: lists,
      lastNotice: lastVisible,
    };
  } catch (e) {
    console.log(e);
    notification['error']({
      message: `첫번쨰 페이지 notice받아오기 실패😥 `,
      description: e.message || e.code,
    });
  }
};

export default getFirstNoticePage;
