import { getAuth, createUserWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { notification } from 'antd';

const signUp = async ({ email, password }) => {
  try {
    const auth = getAuth();
    console.log(auth);
    await setPersistence(auth, browserSessionPersistence);
    const singUpFirebase = await createUserWithEmailAndPassword(auth, email, password);

    notification['success']({
      message: '환영합니다✨',
      description: 'merit Share에서 나눔을 알려주세요',
    });

    return singUpFirebase.user;
  } catch (e) {
    notification['error']({
      message: `회원 가입 실패😥 `,
      description: e.message || e.code,
    });
    throw e;
  }
};

export default signUp;
