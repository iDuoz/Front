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
      console.log('here');
      console.log(res);

      store.dispatch(ACTION.LOGIN_ACTION_FUNC());
      store.dispatch(
        ACTION.SET_USER__ACTION_FUNC({
          user: {
            uid: res.uid,
          },
        })
      );
      return res.uid;
    })
    .then(async (uid) => {
      console.log('받아온 uid');
      console.log(uid);
      await getUserData(uid)
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
          throw Error('유저 실패');
        });
    })
    .then(async () => {
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
          throw Error('지역 실패');
        });
    })

    .catch((e) => {
      console.log(e);
    });
};

export default LogInProcess;
