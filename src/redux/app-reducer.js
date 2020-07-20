import { INIT_SUCCESS, FAKE } from "../constants/index";

let initialState = {
  isInitialized: false,
  fakeData: 0
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SUCCESS:
      return {
        ...state,
        isInitialized: true,
      };
    case FAKE:
      return {
        ...state,
        fakeData: state.fakeData + 1,
      };

    default:
      return state;
  }
};

export default appReducer;
