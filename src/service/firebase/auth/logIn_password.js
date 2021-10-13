// import NotificationPool from '../../containers/redux/components/NotificationPool';
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { notification } from 'antd';

import getUserData from '../database/getUserData';
import getRegionArray from '../database/getRegionArray';

import store from '../../../store/store';
import ACTION from '../../../store/actions/action';

// const auth = getAuth();
const SignIn = async ({ email, password }) => {
  try {
    const auth = getAuth();
    console.log(auth);
    console.log(email);
    await setPersistence(auth, browserSessionPersistence);
    const login = await signInWithEmailAndPassword(auth, email, password);

    notification['success']({
      message: '로그인 성공🥰',
      description: 'merit Share에서 나눔을 알려주세요',
    });

    getUserData(login.user.uid)
      .then((res) => {
        console.log('세션에 로그인되있으니까 정보 새로 받아옴');
        console.log(res);
        store.dispatch(
          ACTION.SET_USER__ACTION_FUNC({
            user: {
              uid: login.user,
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

    return login.user;
  } catch (e) {
    notification['error']({
      message: `로그인 실패😥 `,
      description: e.message || e.code,
    });
  }
};

export default SignIn;
