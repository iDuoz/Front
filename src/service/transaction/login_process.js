import store from '../../store/store';
import ACTION from '../../store/actions/action';
import firebase_login from '../firebase/auth/logIn_password';
import getUserData from '../firebase/database/getUserData';
import getRegionArray from '../firebase/database/getRegionArray';
import { notification, Alert } from 'antd';
import getTotalNoticeNum from '../firebase/database/getTotalNoticeNum';

import { SmileOutlined } from '@ant-design/icons';

const LogInProcess = async (logInInfo) => {
  console.log('💘');

  await firebase_login(logInInfo.email && logInInfo.password ? logInInfo : { email: 'csmo2642@naver.com', password: 'hello6541!' })
    .then((res) => {
      notification['info']({
        message: '로그인통신완료 login Process 1',
        description: `firebase_login then`,
      });
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

  console.log(store.getState().user_reducer);
  notification['info']({
    message: 'f리덕스에 저장된 userid 정보 보기',
    description: `${store.getState().user_reducer.uid}`,
  });

  if (store.getState().user_reducer) {
    notification.open({
      message: '스마일전~',
      description: 'ㅇㅇㄹㅇㄹ',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
    await getRegionArray()
      .then((res) => {
        console.log(res);
        notification.open({
          message: '이게보이면 그냥 스마일~',
          description: ' ㅎㅎㅎ',
          icon: <SmileOutlined style={{ color: '#104ee9' }} />,
        });
      })
      .catch((e) => {
        notification['error']({
          message: 'error',
          description: e.message || e.code,
        });
      });
  }

  // const getUserItem = JSON.parse(sessionStorage.getItem('firebase:authUser:AIzaSyBngd4AMRSJR19dX5-rrPQGAFP6f0Jbt_o:[DEFAULT]'));
  // const UserUid = getUserItem.uid;

  // notification['info']({
  //       message: 'userId🧡🧡🧡🧡',
  //       description: `${UserUid}`,
  //     });

  //     getUserData(UserUid)
  //     .then((res) => {
  //       console.log('');
  //       console.log(res);
  //       notification['info']({
  //       message: '이게뜨면 getUser 완료 .theb',
  //       description: `${UserUid}`,
  //     });
  //       store.dispatch(
  //         ACTION.SET_USER__ACTION_FUNC({
  //           user: {
  //             uid: UserUid,
  //             basic: res.basic,
  //             loveNotice: res.loveNotice,
  //             merit: res.merit,
  //             role: res.role,
  //             totalLoveNotice: res.totalLoveNotice,
  //           },
  //         })
  //       );
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });

  // try {
  //   const setLogin = await firebase_login(logInInfo);

  //   const userId = setLogin.uid;

  //   console.log('userId' + userId);
  //   notification['info']({
  //     message: 'userId🧡🧡🧡🧡',
  //     description: `${userId}`,
  //   });
  // const setUserInfo = await getUserData(userId);

  // const userInfo = setUserInfo;
  // const test = userInfo.role;
  // notification['info']({
  //   message: 'userInfo🧸🧸',
  //   description: `${test}`,
  // });
  // console.log('userInfo');
  // console.log(userInfo);

  // store.dispatch(
  //   ACTION.SET_USER__ACTION_FUNC({
  //     user: {
  //       uid: userId,
  //       basic: userInfo.basic,
  //       loveNotice: userInfo.loveNotice,
  //       merit: userInfo.merit,
  //       role: userInfo.role,
  //       totalLoveNotice: userInfo.totalLoveNotice,
  //     },
  //   })
  // );
  // await getUserData(userId)
  //   .then((res) => {
  //     notification['info']({
  //       message: 'userInfo🧸🧸💛💛💛',
  //       description: `유저정보받아와받아와`,
  //     });
  //     console.log(res);
  //     store.dispatch(
  //       ACTION.SET_USER__ACTION_FUNC({
  //         user: {
  //           uid: userId,
  //           basic: res.basic,
  //           loveNotice: res.loveNotice,
  //           merit: res.merit,
  //           role: res.role,
  //           totalLoveNotice: res.totalLoveNotice,
  //         },
  //       })
  //     );
  //   })
  //   .catch((e) => {
  //     notification['info']({
  //       message: 'userInfo❤😢❤',
  //       description: `유저정보못받아옴`,
  //     });
  //   });
  // notification['info']({
  //   message: ' 곰돌이 다음 유저정보 리덕스 저장 성공.💚💚💚💚',
  //   description: `유저정보 리덕스 저장 성공`,
  // });

  // const setRegion = await getRegionArray();
  // const regionInfo = setRegion;

  // store.dispatch(ACTION.SET_REGION__ACTION_FUNC(regionInfo));
  // notification['info']({
  //   message: '지역정보 리덕스 저장 성공',
  //   description: `지역정보 리덕스 저장 성공`,
  // });

  store.dispatch(ACTION.LOGIN_ACTION_FUNC());

  notification['info']({
    message: '아이폰 로그인 리덕스 ㅈ저ㅏㅇ1.33333',
    description: `리덕스 로그인이요`,
  });
};

// try {
//   const setRegion = await getRegionArray();
//   const regionInfo = setRegion;

//   store.dispatch(ACTION.SET_REGION__ACTION_FUNC(regionInfo));
//   notification['info']({
//     message: '지역정보 리덕스 저장 성공💜💜💜💜💜',
//     description: `지역정보 리덕스 저장 성공`,
//   });
// } catch (e) {
//   notification['info']({
//     message: '지역 리덕스 ㅈ저ㅏㅇ 실패',
//     description: `지역불러오기 리덕스 저장하기실패요`,
//   });
// }
export default LogInProcess;
