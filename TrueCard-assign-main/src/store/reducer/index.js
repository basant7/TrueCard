import { combineReducers } from 'redux';
import auth from './auth/auth';
import userList from './userList/userList';

const allReducers = combineReducers({
  auth,
  userList,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return allReducers(state, action);
};

export default rootReducer;
