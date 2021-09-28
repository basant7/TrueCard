/* eslint-disable import/prefer-default-export */
import { all, takeLatest } from 'redux-saga/effects';
import * as actionLabels from '../actionLabels';
import { loginSaga, authenticationValidatorSaga, logout } from './auth/auth';
import { getUserListSaga } from './userList/userList';

export function* watchAuthentication() {
  yield all([
    takeLatest(actionLabels.LOGIN_SAGA, loginSaga),
    takeLatest(actionLabels.LOGOUT_SAGA, logout),
    takeLatest(actionLabels.AUTHENTICATION_VALIDATOR, authenticationValidatorSaga),
  ]);
}
export function* watchUserList() {
  yield all([takeLatest(actionLabels.GET_USER_LIST_SAGA, getUserListSaga)]);
}
