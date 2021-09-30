import signup_password from '../firebase/signup_password';
import store from '../../store/store';
import ACTION from '../../store/actions/action';

const SignupProcess = (signUpInfo) => {
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

export default SignupProcess;
