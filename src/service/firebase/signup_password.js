import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { notification } from 'antd';

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
      notification['success']({
        message: '환영합니다✨',
        description: 'merit Share에서 나눔을 알려주세요',
      });
      return userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage + '(' + errorCode + ')');
      notification['error']({
        message: `회원 가입 실패😥 `,
        description: errorMessage || errorCode,
      });
      throw error;

      // ..
    });
};

export default signUP;
