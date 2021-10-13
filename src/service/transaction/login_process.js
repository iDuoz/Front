import store from '../../store/store';
import ACTION from '../../store/actions/action';
import firebase_login from '../firebase/auth/logIn_password';
import getUserData from '../firebase/database/getUserData';
import getRegionArray from '../firebase/database/getRegionArray';
import { notification } from 'antd';

// import get_userInfo from "../api/get/get_userInfo"

// const LogInProcess = (logInInfo) => {
//   console.log('loginProcess');
//   console.log(logInInfo);
//   firebase_login(logInInfo)
//     .then((res) => {
//       store.dispatch(ACTION.LOGIN_ACTION_FUNC());

//       console.log(res);
//       console.log(res.uid);
//       notification['success']({
//         message: '아이폰 로그인 리덕스 ㅈ저ㅏㅇ',
//         description: `리덕스 로그인이요`,
//       });
//       return res.uid;
//     })
//     .then((uid) => {
//       // TODO 유저정보 받아오기
//       console.log('로그인하고 정보 넣어보까용');
//       console.log(uid);

//       getUserData(uid)
//         .then((res) => {
//           console.log('정보 받아오기완료 ,,');
//           console.log(res);
//           store.dispatch(
//             ACTION.SET_USER__ACTION_FUNC({
//               user: {
//                 uid: uid,
//                 basic: res.basic,
//                 loveNotice: res.loveNotice,
//                 merit: res.merit,
//                 role: res.role,
//                 totalLoveNotice: res.totalLoveNotice,
//               },
//             })
//           );
//           console.log('정보 받아오기완료?????????????????????????????????????????');

//           notification['success']({
//             message: '아이폰 리덕스 저장',
//             description: `아이폰 ㅗㅗㅗㅗ`,
//           });
//         })
//         .catch((e) => {
//           notification['error']({
//             message: `get userData 실패😥 `,
//             description: e.message || e.code,
//           });
//         });
//     })
//     .catch((e) => {
//       notification['error']({
//         message: `로그인 .catch 실패😥 `,
//         description: e.message || e.code,
//       });
//     });

//   getRegionArray()
//     .then((res) => {
//       console.log('region 정보 보여줌');
//       console.log(res);
//       store.dispatch(ACTION.SET_REGION__ACTION_FUNC(res));
//     })
//     .catch((e) => {
//       notification['error']({
//         message: `getRegionArray 실패😥 `,
//         description: e.message || e.code,
//       });
//     });
// };

const LogInProcess = async (logInInfo) => {
  try {
    const setLogin = await firebase_login(logInInfo);

    notification['info']({
      message: '이거나올라나?',
      description: `나오냐?`,
    });
    const userId = setLogin.uid;

    console.log('userId' + userId);
    notification['info']({
      message: 'userId💛',
      description: `${userId}`,
    });
    const setUserInfo = await getUserData(userId);

    const userInfo = setUserInfo;
    const test = userInfo.admin;
    notification['info']({
      message: 'userInfo🧸🧸',
      description: `${test}`,
    });
    console.log('userInfo');
    console.log(userInfo);

    store.dispatch(
      ACTION.SET_USER__ACTION_FUNC({
        user: {
          uid: userId,
          basic: userInfo.basic,
          loveNotice: userInfo.loveNotice,
          merit: userInfo.merit,
          role: userInfo.role,
          totalLoveNotice: userInfo.totalLoveNotice,
        },
      })
    );
    notification['info']({
      message: '🎀🎀유저정보 리덕스 저장 성공🎀🎀',
      description: `유저정보 리덕스 저장 성공`,
    });

    // const setRegion = await getRegionArray();
    // const regionInfo = setRegion;

    // store.dispatch(ACTION.SET_REGION__ACTION_FUNC(regionInfo));
    // notification['info']({
    //   message: '지역정보 리덕스 저장 성공',
    //   description: `지역정보 리덕스 저장 성공`,
    // });

    store.dispatch(ACTION.LOGIN_ACTION_FUNC());

    notification['info']({
      message: '아이폰 로그인 리덕스 ㅈ저ㅏㅇ',
      description: `리덕스 로그인이요`,
    });
  } catch (e) {
    notification['info']({
      message: '로그인 리덕스 ㅈ저ㅏㅇ 실패',
      description: `리덕스 로그인이요 실패요`,
    });
  }

  try {
    const setRegion = await getRegionArray();
    const regionInfo = setRegion;

    store.dispatch(ACTION.SET_REGION__ACTION_FUNC(regionInfo));
    notification['info']({
      message: '지역정보 리덕스 저장 성공🎯🐉🐉🐉🤍',
      description: `지역정보 리덕스 저장 성공`,
    });
  } catch (e) {
    notification['info']({
      message: '지역 리덕스 ㅈ저ㅏㅇ 실패',
      description: `지역불러오기 리덕스 저장하기실패요`,
    });
  }
};

export default LogInProcess;
