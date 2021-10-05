import { createStore, combineReducers } from 'redux';
import login_reducer from './reducers/login_reducer';
import user_reducer from './reducers/user_reducer';
import notification_reducer from './reducers/notification_reducer';
import region_reducer from './reducers/region_reducer';
export default createStore(
  combineReducers({
    login_reducer,
    user_reducer,
    notification_reducer,
    region_reducer,
    //reducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
