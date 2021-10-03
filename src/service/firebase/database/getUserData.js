import { doc, getDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const userService = {
  getUserData: async () => {
    try {
      const db = getFirestore();
      const docRef = doc(db, 'members', 'volunteer', 'details', 'YRVmBQmHxNWmXj2sPelnDhG3Kja2');
      const docSnap = await getDoc(docRef);
      console.log('DB data : ', docSnap.data());
      return docSnap.data();
    } catch (e) {
      console.log('error DB : ', e);
      return e;
    }
  },
};

// const userService = {
//   getUserData: () => {
//     const db = getFirestore();
//     const docRef = doc(db, 'members', 'volunteer', 'details', 'YRVmBQmHxNWmXj2sPelnDhG3Kja2');
//     return getDoc(docRef)
//       .then((res) => {
//         console.log(res);
//         console.log(res.json);
//         return res;
//       })
//       .catch((e) => {
//         console.log(e);
//         throw e;
//       });
//   },
// };

export default userService;
