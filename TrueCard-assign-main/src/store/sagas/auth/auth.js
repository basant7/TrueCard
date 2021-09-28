import { put, call } from 'redux-saga/effects';
import {
  loginSuccess,
  loginStart,
  loginFail,
  logoutStart,
  authenticationValidator,
  logoutSuccess,
} from '../../actions';
// import axiosMain from '../../../http/axios/axios_main';

export function* loginSaga(action) {
  yield put(loginStart());
  const { username, password } = action.payload;

  // correct credentials
  // username= test
  // password= Test@12345

  const token = Math.random();
  const deviceId = localStorage.getItem('deviceId');
  console.log('username', token);
  console.log('password', deviceId);

  if (username === 'test' && password === 'Test@12345') {
    yield call([localStorage, 'setItem'], 'authToken', token);

    yield put(loginSuccess({ token, deviceId }));
  } else {
    yield put(loginFail('Invalid credentials! Please try again.'));
  }
}

export function* logout() {
  yield put(logoutStart());
  yield call([localStorage, 'removeItem'], 'authToken');
  yield call([localStorage, 'removeItem'], 'deviceId');
  yield put(logoutSuccess());
  yield put(authenticationValidator());
}

export function* authenticationValidatorSaga() {
  yield put(loginStart());
  const token = yield localStorage.getItem('authToken');
  if (!token) {
    // yield put(logout()); // logout action
  } else {
    yield put(loginSuccess({ token }));
  }
}
