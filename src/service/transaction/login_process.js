import store from '../../store/store';
import ACTION from '../../store/actions/action';
import firebase_login from '../firebase/auth/logIn_password';
import getUserData from '../firebase/database/getUserData';
import getRegionArray from '../firebase/database/getRegionArray';
// import get_userInfo from "../api/get/get_userInfo"

const LogInProcess = (logInInfo) => {
  console.log('loginProcess');
  console.log(logInInfo);
  firebase_login(logInInfo)
    .then((res) => {
      store.dispatch(ACTION.LOGIN_ACTION_FUNC());
      console.log(res);
      console.log(res.uid);
      return res.uid;
    })
    .then((uid) => {
      // TODO 유저정보 받아오기
      console.log('로그인하고 정보 넣어보까용');
      console.log(uid);
      getUserData(uid)
        .then((res) => {
          console.log('정보 받아오기완료 ,,');
          console.log(res);
          store.dispatch(
            ACTION.SET_USER__ACTION_FUNC({
              user: {
                uid: uid,
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
    })
    .then((uid) => {
      getRegionArray()
        .then((res) => {
          console.log('region 정보 보여줌');
          console.log(res);
          store.dispatch(ACTION.SET_REGION__ACTION_FUNC(res));
        })
        .catch((e) => {
          console.log(e);
        });
    })
    .catch((e) => console.log(e));
};

export default LogInProcess;
