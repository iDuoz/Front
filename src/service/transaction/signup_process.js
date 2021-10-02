import signup_password from '../firebase/auth/signup_password';
import store from '../../store/store';
import ACTION from '../../store/actions/action';

const SignUpProcess = (signUpInfo) => {
  console.log(signUpInfo);

  signup_password(signUpInfo)
    .then((res) => {
      console.log(res);
      console.log('회원가입 성공');
      console.log('ㄹ그인 start,,,');
      store.dispatch(
        ACTION.SET_USER__ACTION_FUNC({
          user: {
            email: 'csmo2642@naver.com',
            name: 'euncherry',
          },
        })
      );
      store.dispatch(ACTION.LOGIN_ACTION_FUNC());
    })
    .catch((err) => console.log(err));
  return { success: 'ok' };
};

export default SignUpProcess;
