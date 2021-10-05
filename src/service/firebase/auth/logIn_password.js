// import NotificationPool from '../../containers/redux/components/NotificationPool';
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { notification } from 'antd';

// const auth = getAuth();
const SignIn = ({ email, password }) => {
  const auth = getAuth();
  console.log(auth);
  console.log(email);
  return setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          console.log(userCredential);
          console.log('success');
          notification['success']({
            message: '로그인 성공🥰',
            description: 'merit Share에서 나눔을 알려주세요',
          });
          return userCredential.user;
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
    })
    .catch(async (error) => {
      console.log(error);
      console.log(error.message + '+' + error.code);
      notification['error']({
        message: `session 실패😥 `,
        description: error.message || error.code,
      });
      throw error;
    });
};

export default SignIn;
