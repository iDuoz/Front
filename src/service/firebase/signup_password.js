import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// const auth = getAuth();
const signUP = ({ email, password }) => {
  const auth = getAuth();
  console.log(auth);
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      const user = userCredential.user;
      console.log(user);
      return userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage + '(' + errorCode + ')');
      throw error;

      // ..
    });
};

export default signUP;
