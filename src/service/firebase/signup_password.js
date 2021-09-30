import NotificationPool from '../../containers/redux/components/NotificationPool';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// const auth = getAuth();
const signUP = ({ email, password }) => {
  const auth = getAuth();
  console.log(auth);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      const user = userCredential.user;
      console.log(user);
      NotificationPool.api.add({
        title: '회원가입 성공🎉',
        content: 'MeritShare에 가입하신걸 환영합니다.',
        status: 'success',
      });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      NotificationPool.api.add({
        title: 'Test',
        content: errorMessage + '(' + errorCode + ')',
        status: 'error',
      });

      // ..
    });
};

export default signUP;
