import auth_action from './auth_action';
import user_action from './user_action';
import noticeTotalNum_action from './noticeTotalNum_action';
import notification_action from './notification_action';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...auth_action,
  ...user_action,
  ...noticeTotalNum_action,
  notification_action,
};
