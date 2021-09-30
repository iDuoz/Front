// import NotificationPool from '../../containers/redux/components/NotificationPool';
import { getAuth, signOut } from 'firebase/auth';
import { notification } from 'antd';

const SignOut = () => {
  const auth = getAuth();

  return signOut(auth)
    .then((res) => {
      // Signed in
      console.log(res);
      console.log('logout success');
      notification['success']({
        message: '로그아웃 성공🥰',
        description: '다시 또 만나요!',
      });
      return res;
      // ...
    })
    .catch(async (error) => {
      console.log(error);
      //   let err = await error.then();
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorMessage + '(' + errorCode + ')');
      notification['error']({
        message: `로그아웃 실패😥 `,
        description: errorMessage || errorCode,
      });
      throw error;

      // ..
    });
};

export default SignOut;
