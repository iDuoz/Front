import { notification } from 'antd';
import { doc, setDoc, getFirestore } from 'firebase/firestore';

const addUser = async (uid, email) => {
  try {
    const db = getFirestore();
    await setDoc(doc(db, 'members', uid), {
      role: 'volunteer',
      basic: {
        addRegion: [],
        age: '',
        email: email,
        name: '',
        region: '',
        sex: '',
      },
      loveNotice: [],
      merit: {
        active: false,
        animal: false,
        disaster: false,
        farming: false,
        online: false,
      },
      totalLoveNotice: 0,
    });
    return 'uid db저장 성공';
  } catch (e) {
    notification['error']({
      message: `user db정보저장 실패😥 `,
      description: e.message || e.code,
    });
  }
};

export default addUser;
