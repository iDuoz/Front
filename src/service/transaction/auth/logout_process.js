import store from '../../../store/store';
import ACTION from '../../../store/actions/action';
import firebase_logout from '../../firebase/auth/logout_password';

const LogOutProcess = () => {
  console.log('logoutProcess');

  firebase_logout()
    .then((res) => {
      console.log(res);
      store.dispatch(ACTION.LOGOUT_ACTION_FUNC());
      store.dispatch(ACTION.DELETE_USER__ACTION_FUNC());
    })
    .catch((e) => console.log(e));
};

export default LogOutProcess;
