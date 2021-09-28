import { createStore, combineReducers } from 'redux';
import login_reducer from './reducers/login_reducer';
import user_reducer from './reducers/user_reducer';
import noticetotalnum_reducer from './reducers/noticetotalnum_reducer';
import notification_reducer from './reducers/notification_reducer';

export default createStore(
  combineReducers({
    login_reducer,
    user_reducer,
    noticetotalnum_reducer,
    notification_reducer,
    //reducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
