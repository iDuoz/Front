import store from '../../store/store';
import ACTION from '../../store/actions/action';
import firebase_login from '../firebase/auth/logIn_password';
import getUserData from '../firebase/database/getUserData';
import getRegionArray from '../firebase/database/getRegionArray';
import { notification } from 'antd';

// import get_userInfo from "../api/get/get_userInfo"

const LogInProcess = (logInInfo) => {
  console.log('loginProcess');
  console.log(logInInfo);
  firebase_login(logInInfo)
    .then((res) => {
      store.dispatch(ACTION.LOGIN_ACTION_FUNC());
      console.log(res);
      console.log(res.uid);
      notification['success']({
        message: '아이폰 로그인 리덕스 ㅈ저ㅏㅇ',
        description: '자꾸안대면 열받쥬?',
      });
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
          console.log('정보 받아오기완료?????????????????????????????????????????');
          notification['success']({
            message: '아이폰 리덕스 저장',
            description: '자꾸안대면 열받쥬?',
          });
        })
        .catch((e) => {
          notification['error']({
            message: `get userData 실패😥 `,
            description: e.message || e.code,
          });
        });
    })
    .catch((e) => {
      notification['error']({
        message: `로그인 .catch 실패😥 `,
        description: e.message || e.code,
      });
    });

  getRegionArray()
    .then((res) => {
      console.log('region 정보 보여줌');
      console.log(res);
      store.dispatch(ACTION.SET_REGION__ACTION_FUNC(res));
    })
    .catch((e) => {
      notification['error']({
        message: `getRegionArray 실패😥 `,
        description: e.message || e.code,
      });
    });
};

export default LogInProcess;
