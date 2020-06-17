import {  SET_USER_AUTH } from "../constants/index";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isLogin: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return {
        ...state,
        ...action.payload,
        isLogin: true,
      };

    default:
      return state;
  }
};

export default userReducer;
