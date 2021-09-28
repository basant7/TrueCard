import * as actionLabels from '../../actionLabels';

export const initialState = {
  isLoading: false,
  userList: [],
  errorMsg: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.GET_USER_LIST_START:
      return { ...state, isLoading: true };
    case actionLabels.GET_USER_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        userList: payload.data,
      };
    }
    case actionLabels.GET_USER_LIST_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    default:
      return state;
  }
};
