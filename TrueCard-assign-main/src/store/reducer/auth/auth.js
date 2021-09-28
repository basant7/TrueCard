import * as actionLabels from '../../actionLabels';

export const initialState = {
  isLogin: false,
  isLoading: false,
  userData: null,
  authToken: '',
  errorMsg: '',
  fcmToken: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.LOGIN_START:
      return { ...state, isLoading: true };
    case actionLabels.LOGIN_SUCCESS: {
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        authToken: payload.token,
        deviceId: payload.deviceId,
        errorMsg: '',
      };
    }
    case actionLabels.LOGIN_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.LOGOUT_START:
      return { ...state, isLoading: true };
    case actionLabels.LOGOUT_SUCCESS: {
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        authToken: '',
        deviceId: '',
        errorMsg: '',
      };
    }
    case actionLabels.LOGOUT_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    default:
      return state;
  }
};
