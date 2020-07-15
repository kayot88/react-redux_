import { INIT_SUCCESS } from "../constants/index";

let initialState = {
  isInitialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SUCCESS:
      return {
        ...state,
        isInitialized: true,
      };

    default:
      return state;
  }
};

export default appReducer;
