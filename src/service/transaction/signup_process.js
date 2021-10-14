import firebase_signup from '../firebase/auth/signup_password';
import store from '../../store/store';
import ACTION from '../../store/actions/action';
import addUser from '../firebase/database/addUser';
import getRegionArray from '../firebase/database/getRegionArray';
import { notification } from 'antd';

const SignUpProcess = async (signUpInfo) => {
  await firebase_signup(signUpInfo)
    .then((res) => {
      store.dispatch(ACTION.LOGIN_ACTION_FUNC());

      store.dispatch(
        ACTION.SET_USER__ACTION_FUNC({
          user: {
            uid: res.uid,
            basic: {
              addRegion: [],
              region: '',
              age: '',
              email: res.email,
              sex: '',
              name: '',
            },
            loveNotice: [],
            merit: {
              education: false,
              cooking: false,
              government: false,
              disaster: false,
              eco: false,
            },
            role: 'volunteer',
            totalLoveNotice: 0,
          },
        })
      );
    })
    .catch((e) => {
      console.log(e);
    });

  console.log(store.getState().user_reducer);
  console.log(store.getState().user_reducer.uid && store.getState().user_reducer.basic.email);
  if (store.getState().user_reducer.uid && store.getState().user_reducer.basic.email) {
    console.log('adduser시작');
    await addUser(store.getState().user_reducer.uid, store.getState().user_reducer.basic.email)
      .then((res) => {
        console.log('user add DB save,,, ');
        console.log(res);
        notification.open({
          message: 'siignup aadd user',
          description: '통신성공',
          icon: '🤗',
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  console.log(store.getState().login_reducer);
  console.log(store.getState().login_reducer.logined);

  //리덕스에 로그인이 저장됬다면 -> getRegion
  if (store.getState().login_reducer.logined) {
    console.log('getRegionArray시작');
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
};

export default SignUpProcess;
