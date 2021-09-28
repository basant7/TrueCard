import * as actionLabels from '../../actionLabels';

export const getUserListStart = () => ({
  type: actionLabels.GET_USER_LIST_START,
});

export const getUserListSaga = payload => ({
  type: actionLabels.GET_USER_LIST_SAGA,
  payload,
});

export const getUserListSuccess = payload => ({
  type: actionLabels.GET_USER_LIST_SUCCESS,
  payload,
});

export const getUserListFail = payload => ({
  type: actionLabels.GET_USER_LIST_FAIL,
  payload,
});
