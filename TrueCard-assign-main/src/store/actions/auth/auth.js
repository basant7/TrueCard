import * as actionLabels from '../../actionLabels';

export const loginStart = () => ({
  type: actionLabels.LOGIN_START,
});

export const login = payload => ({
  type: actionLabels.LOGIN_SAGA,
  payload,
});

export const loginSuccess = payload => ({
  type: actionLabels.LOGIN_SUCCESS,
  payload,
});

export const loginFail = payload => ({
  type: actionLabels.LOGIN_FAIL,
  payload,
});

export const authenticationValidator = () => ({
  type: actionLabels.AUTHENTICATION_VALIDATOR,
});
export const logoutStart = () => ({
  type: actionLabels.LOGOUT_START,
});

export const logout = payload => ({
  type: actionLabels.LOGOUT_SAGA,
  payload,
});

export const logoutSuccess = payload => ({
  type: actionLabels.LOGOUT_SUCCESS,
  payload,
});

export const logoutFail = payload => ({
  type: actionLabels.LOGOUT_FAIL,
  payload,
});
