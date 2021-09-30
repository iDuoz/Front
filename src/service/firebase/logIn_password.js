// import NotificationPool from '../../containers/redux/components/NotificationPool';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { notification } from 'antd';

// const auth = getAuth();
const SignIn = ({ email, password }) => {
  const auth = getAuth();
  console.log(auth);
  console.log(email);
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      const user = userCredential.user;
      console.log(user);
      console.log('success');
      console.log(userCredential);
      console.log(userCredential);
      notification['success']({
        message: '로그인 성공🥰',
        description: 'merit Share에서 나눔을 알려주세요',
      });
      return userCredential;
      // ...
    })
    .catch(async (error) => {
      console.log(error);
      //   let err = await error.then();
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('"errorMessage"');
      console.log(errorMessage);
      console.log(errorMessage + '(' + errorCode + ')');
      notification['error']({
        message: `로그인 실패😥 `,
        description: errorMessage || errorCode,
      });
      throw error;

      // ..
    });
};

export default SignIn;
