import { getFirestore, query, collection, limit, getDocs } from 'firebase/firestore';
// import { doc, getDoc,  startAfter } from 'firebase/firestore';
const getTotalNotices = async () => {
  const db = getFirestore();

  // // 문서의 첫번쨰 페이지 쿼리
  // const first = query(collection(db,"noticeBasics"),limit(5))
  // const documentSnapshots  = await getDoc(first);

  // //마지막으로 표시된 문서 가져오기2
  // const lastVisible = documentSnapshots.doc[documentSnapshots.doc.length -1];
  // console.log("last",lastVisible);

  // //이 문서에서 시작하는 새쿼리 구성
  // //다음 5개 도시를 구하세요
  // const next = query(collection(db,"noticeBasics"),startAfter(lastVisible),limit(5))

  const setQuery = query(collection(db, 'noticeBasics'), limit(5));
  const querySnapshot = await getDocs(setQuery);

  const lists = [];

  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    lists.push(doc.data());
    console.log(doc.id, '=>', doc.data());
  });
  console.log('check');
  console.log(lists);
};

export default getTotalNotices;
