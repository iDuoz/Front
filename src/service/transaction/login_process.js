import store from '../../store/store';
import ACTION from '../../store/actions/action';
import firebase_login from '../firebase/auth/logIn_password';
// import get_userInfo from "../api/get/get_userInfo"

const LogInProcess = (logInInfo) => {
  console.log('loginProcess');
  console.log(logInInfo);
  firebase_login(logInInfo)
    .then((res) => {
      console.log(res);
      console.log(res.uid);
      store.dispatch(
        ACTION.SET_USER__ACTION_FUNC({
          user: {
            uid: res.uid,
            email: 'csmo2642@naver.com',
            name: 'euncherry',
          },
        })
      );
      store.dispatch(ACTION.LOGIN_ACTION_FUNC());
    })
    .catch((e) => console.log(e));
};

export default LogInProcess;
