import {
  SET_USER_AUTH,
  LOGOUT,
  CAPTCHA,
  CAPTCHA_DEFAULT,
} from "../constants/index";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isLogin: false,
  captcha: null,
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
    case CAPTCHA_DEFAULT:
      return {
        ...state,
        captcha: null,
      };

    default:
      return state;
  }
};

export default userReducer;
