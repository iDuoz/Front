import store from '../store/store';
import ACTION from '../store/actions/action';
import { getAuth } from 'firebase/auth';
const start = () => {
  console.log('start');

  //   const auth = getAuth();
  //   const user = auth.currentUser;

  //   if (!user) return console.log('login user x');

  //   console.log(user);
  //   console.log(user.uid);
  //   store.dispatch(ACTION.LOGIN_ACTION_FUNC());
  //   store.dispatch(
  //     ACTION.SET_USER__ACTION_FUNC({
  //       user: {
  //         userUID: user.uid,
  //         email: user.email,
  //         name: user.displayName,
  //       },
  //     })
  //   );
};

export default start;
