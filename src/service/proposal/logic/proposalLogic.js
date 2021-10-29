import store from '../../../store/store';
import onlineTrue from './onlineTrue';
import onlineFalse from './onlineFalse';

const proposalLogic = (precedence, index) => {
  const isOnline = store.getState().user_reducer.merit.online;

  console.log('💛 ');
  console.log(isOnline);

  return isOnline ? onlineTrue(precedence, index) : onlineFalse(precedence, index);
};

export default proposalLogic;
