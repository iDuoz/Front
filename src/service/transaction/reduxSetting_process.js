import store from '../../store/store';
import ACTION from '../../store/actions/action';
import getUserData from '../firebase/database/getUserData';
import getRegionArray from '../../service/firebase/database/getRegionArray';
const Start = async (UserUid) => {
  getUserData(UserUid)
    .then((res) => {
      console.log('세션에 로그인되있으니까 정보 새로 받아옴');
      console.log(res);
      store.dispatch(
        ACTION.SET_USER__ACTION_FUNC({
          user: {
            uid: UserUid,
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
  getRegionArray()
    .then((res) => {
      console.log('region 정보 보여줌');
      console.log(res);
      store.dispatch(ACTION.SET_REGION__ACTION_FUNC(res));
    })
    .catch((e) => {
      console.log(e);
    });

  // console.log(user.uid);
};

export default Start;
