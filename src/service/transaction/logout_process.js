import store from '../../store/store';
import ACTION from '../../store/actions/action';
import firebase_logout from '../firebase/logout_password';
// import get_userInfo from "../api/get/get_userInfo"
import NotificationPool from '../../containers/redux/components/NotificationPool';

const LoginProcess = () => {
  console.log('logoutProcess');

  firebase_logout()
    .then((res) => {
      console.log(res);
      store.dispatch(ACTION.LOGOUT_ACTION_FUNC());
      store.dispatch(ACTION.DELETE_USER__ACTION_FUNC());
    })
    .catch((e) => console.log(e));

  // NotificationPool.api.add({
  //   title: 'Error from get_my_img',
  //   content: ')',
  //   status: 'error',
  // });
  // post_login(logInInfo);
  // await store.dispatch(
  //   ACTION.SET_USER__ACTION_FUNC({
  //     user: {
  //       email: 'csmo2642@naver.com',
  //       name: 'euncherry',
  //     },
  //   })
  // );

  // await store.dispatch(ACTION.LOGIN_ACTION_FUNC());
  //postlogin 코드
  // post_login(JSON.stringify(logInInfo))
  // .then(async(token)=>{
  //     console.log("로그인 성공")
  //     console.log(token)
  //     if(token.accessToken){
  //         localStorage.setItem("SoTong-token",token.accessToken)
  //         return(get_userInfo())
  //     }else{
  //         // eslint-disable-next-line
  //         throw {error : "AccessToken not exist"}
  //     }
  // }).then(async (res)=>{
  //     console.log("유저정보받아오기성공")
  //     console.log(res)
  //     store.dispatch(ACTION.SET_USER__ACTION_FUNC({
  //                 user : {
  //                     "email" :res.email,
  //                     "name":res.name ,
  //                     "userId" :res.userId ,
  //                     "phone_number" :res.phoneNumber ,
  //                     "department" :res.department,
  //                     "role" :(res.roles[0].name === "ROLE_ADMIN" ? 'ADMIN' : 'USER' )
  //                 }
  //             }))
  //             store.dispatch(ACTION.LOGIN_ACTION_FUNC());

  // }).catch((err)=>console.log(err))
  // .catch((err) =>  console.log(err) )
};

export default LoginProcess;
