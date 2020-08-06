import { SET_USER_AUTH, LOGOUT, CAPTCHA } from "../constants/index";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isLogin: false,
  captcha: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return {
        ...state,
        ...action.payload,
        isLogin: true,
      };
      case LOGOUT:
      return {
        ...state,
        ...action.payload,
      };
      case CAPTCHA:
      return {
        ...state,
        captcha: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
