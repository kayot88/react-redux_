import { setLoginApi } from "./../api/loginApi";
import { getUserProfileById } from "./profilePageAc";
import { getUserAuth } from "./usersPage";
import { LOGOUT, CAPTCHA } from "../constants";
import { stopSubmit } from "redux-form";

const logoutAC = () => {
  return {
    type: LOGOUT,
    payload: { userId: null, email: null, login: null, isLogin: false },
  };
};
const captchaAc = (captcha) => {
  return {
    type: CAPTCHA,
    payload: captcha,
  };
};

export const setLoginTC = (formData) => async (dispatch) => {
  let res = await setLoginApi.postLoginFormData(formData);
  if (res.data.resultCode === 0) {
    dispatch(getUserAuth());
    dispatch(getUserProfileById(res.data.data.userId));
  } else if (res.data.resultCode === 10) {
    try {
      let res = await setLoginApi.getCatcha();
      dispatch(captchaAc(res.data.url));
    } catch (error) {}
    debugger;
  }
};

export const logoutTC = () => async (dispatch) => {
  let res = await setLoginApi.logout();
  if (res.data.resultCode === 0) {
    dispatch(logoutAC());
  }
};
