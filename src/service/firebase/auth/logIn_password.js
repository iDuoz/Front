// import NotificationPool from '../../containers/redux/components/NotificationPool';
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { notification } from 'antd';

// const auth = getAuth();
const SignIn = async ({ email, password }) => {
  try {
    const auth = getAuth();
    console.log(auth);
    console.log(email);
    await setPersistence(auth, browserSessionPersistence);
    const login = await signInWithEmailAndPassword(auth, email, password);

    notification['success']({
      message: '로그인 성공🥰',
      description: 'merit Share에서 나눔을 알려주세요',
    });

    return login.user;
  } catch (e) {
    notification['error']({
      message: `로그인 통신 실패😥 `,
      description: e.message || e.code,
    });
  }
};

export default SignIn;
