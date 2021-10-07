import signup_password from '../firebase/auth/signup_password';
import store from '../../store/store';
import ACTION from '../../store/actions/action';
import addUser from '../firebase/database/addUser';
const SignUpProcess = (signUpInfo) => {
  console.log(signUpInfo);

  signup_password(signUpInfo)
    .then((res) => {
      console.log(res);
      console.log(res.uid);
      console.log('회원가입 성공');
      console.log('redux ㄹ그인 start,,,');
      store.dispatch(ACTION.LOGIN_ACTION_FUNC());
      store.dispatch(
        ACTION.SET_USER__ACTION_FUNC({
          user: {
            uid: res.uid,
          },
        })
      );
      return res;
    })
    .then((res) => {
      console.log('addUser Start');
      console.log(res);
      console.log(res.uid);
      // console.log(res.email)

      addUser(res.uid, res.email)
        .then((res) => {
          console.log('user DB save,,, ');
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    })
    .catch((err) => console.log(err));
  return { success: 'signup done' };
};

export default SignUpProcess;
