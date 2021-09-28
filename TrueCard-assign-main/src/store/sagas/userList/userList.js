/* eslint-disable no-undef */
import { put } from 'redux-saga/effects';
import { getUserListFail, getUserListStart, getUserListSuccess } from '../../actions';

import axiosMain from '../../../http/axios/axios_main';

// eslint-disable-next-line import/prefer-default-export
export function* getUserListSaga() {
  yield put(getUserListStart());
  try {
    const response = yield axiosMain.get('https://reqres.in/api/users?page=2');
    if (response.status === 200) {
      yield put(getUserListSuccess(response.data));
    } else {
      yield put(getUserListFail('Something went wrong! Please try again.'));
    }
  } catch (error) {
    if (
      error !== undefined &&
      error.response !== undefined &&
      error.response.status !== undefined
    ) {
      if (error.response.status === 400) {
        yield put(getUserListFail(error.response.data.msg));
      } else if (
        error.response.data.msg !== undefined &&
        error.response.data.msg !== '' &&
        typeof error.response.data.msg === 'string'
      ) {
        yield put(getUserListFail(error.response.data.msg));
      } else {
        yield put(getUserListFail('Server error! Please try again.'));
      }
    } else {
      yield put(getUserListFail('Something went wrong! Please try again.'));
    }
  }
}
