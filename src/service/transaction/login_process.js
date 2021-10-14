import store from '../../store/store';
import ACTION from '../../store/actions/action';
import firebase_login from '../firebase/auth/logIn_password';
import getUserData from '../firebase/database/getUserData';
import getRegionArray from '../firebase/database/getRegionArray';
import { notification } from 'antd';

const LogInProcess = async (logInInfo) => {
  console.log('💘');

  await firebase_login(logInInfo.email && logInInfo.password ? logInInfo : { email: 'csmo2642@naver.com', password: 'hello6541!' })
    .then((res) => {
      store.dispatch(ACTION.LOGIN_ACTION_FUNC());
      store.dispatch(
        ACTION.SET_USER__ACTION_FUNC({
          user: {
            uid: res.uid,
          },
        })
      );
    })
    .catch((e) => {
      console.log(e);
    });

  console.log(store.getState().login_reducer);
  console.log(store.getState().login_reducer.logined);

  if (store.getState().login_reducer.logined) {
    await getRegionArray()
      .then((res) => {
        console.log(res);
        store.dispatch(ACTION.SET_REGION__ACTION_FUNC(res));
      })
      .catch((e) => {
        notification['error']({
          message: 'error',
          description: e.message || e.code,
        });
      });
  }
  console.log('store.getState().user_reducer.uid' + store.getState().user_reducer.uid);
  if (store.getState().user_reducer.uid) {
    await getUserData(store.getState().user_reducer.uid)
      .then((res) => {
        console.log(res);
        store.dispatch(
          ACTION.SET_USER__ACTION_FUNC({
            user: {
              basic: res.basic,
              loveNotice: res.loveNotice,
              merit: res.merit,
              role: res.role,
              totalLoveNotice: res.totalLoveNotice,
            },
          })
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }
};

export default LogInProcess;
