import signup_password from '../firebase/auth/signup_password';
import store from '../../store/store';
import ACTION from '../../store/actions/action';
import addUser from '../firebase/database/addUser';
import getRegionArray from '../firebase/database/getRegionArray';
const SignUpProcess = (signUpInfo) => {
  console.log(signUpInfo);

  signup_password(signUpInfo)
    .then((res) => {
      console.log(res);
      console.log(res.uid);
      console.log('회원가입 성공');
      console.log('redux ㄹ그인 start,,,');
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
              animal: false,
              online: false,
              farming: false,
              disaster: false,
              active: false,
            },
            role: 'volunteer',
            totalLoveNotice: 0,
          },
        })
      );
      return res;
    })
    .then((res) => {
      console.log('addUser Start');
      console.log(res);
      console.log(res.uid);
      // console.log(res.email)

      addUser(res.uid, res.email)
        .then((res) => {
          console.log('user DB save,,, ');
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    })
    .then((res) => {
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
    .catch((err) => console.log(err));
  return { success: 'signup done' };
};

export default SignUpProcess;
