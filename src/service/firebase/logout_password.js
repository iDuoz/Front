// import NotificationPool from '../../containers/redux/components/NotificationPool';
import { getAuth, signOut } from 'firebase/auth';

const SignOut = () => {
  const auth = getAuth();

  return signOut(auth)
    .then((res) => {
      // Signed in
      console.log(res);
      console.log('logout success');
      return res;
      // ...
    })
    .catch(async (error) => {
      console.log(error);
      //   let err = await error.then();
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorMessage + '(' + errorCode + ')');
      throw error;

      // ..
    });
};

export default SignOut;
