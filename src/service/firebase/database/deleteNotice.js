import { notification } from 'antd';
import { doc, deleteDoc, getFirestore } from 'firebase/firestore';

const deleteNotice = async (noticeId, deleteNoticeMerit, noticeTotalNum) => {
  console.log(noticeId, deleteNoticeMerit);
  try {
    const db = getFirestore();
    const deleteNoticeRef = doc(db, 'noticeBasics', noticeId);
    await deleteDoc(deleteNoticeRef)
      .then(async (res) => {
        notification['success']({
          message: `notice Basic 삭제 완료✨ `,
          description: '정보 db에 삭제완료',
        });
      })
      .then(async (res) => {
        await deleteDoc(doc(db, 'noticeProposal', 'merit', deleteNoticeMerit, noticeId))
          .then(async (res) => {
            notification['success']({
              message: `notice merit 별 삭제 완료✨ `,
              description: '정보 db에 삭제완료',
            });
          })
          .catch((e) => {
            console.log(e);
            notification['error']({
              message: `notice merit 별 삭제 실패😥 `,
              description: e.message || e.code,
            });
            throw e;
          });
      })
      .catch((e) => {
        console.log(e);
        notification['error']({
          message: `notice Basic url 삭제 실패😥 `,
          description: e.message || e.code,
        });
        throw e;
      });

    // const updateUserRef = doc(db, 'members', uid);
    // await updateDoc(updateUserRef, editData);
    notification['success']({
      message: `notice 삭제 완료✨ `,
      description: '정보 db에 삭제완료',
    });
  } catch (e) {
    notification['error']({
      message: `notice 삭제 실패😥 `,
      description: e.message || e.code,
    });
    throw e;
  }
};

export default deleteNotice;
