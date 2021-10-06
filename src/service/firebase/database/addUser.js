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
      },
      loveNotice: [],
      merit: {
        active: false,
        animal: false,
        disaster: false,
        farming: false,
        online: false,
      },
    });
    return 'uid db저장 성공';
  } catch (e) {
    return e;
  }
};

export default addUser;
