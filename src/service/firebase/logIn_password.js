// import NotificationPool from '../../containers/redux/components/NotificationPool';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// const auth = getAuth();
const SignUp = ({ email, password }) => {
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
      return userCredential;
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

export default SignUp;
