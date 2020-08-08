import { setLoginApi } from "../api/loginApi";
import { getUserProfileById } from "./profilePageAc";
import { getUserAuth } from "./usersPage";
import { LOGOUT, CAPTCHA, CAPTCHA_DEFAULT } from "../constants";
import { stopSubmit } from "redux-form";
import { logoutACType, captchaAcType, captchaType } from "../types/types";

const logoutAC = (
  userId: null,
  email: null,
  login: null,
  isLogin: false
): logoutACType => {
  return {
    type: "LOGOUT",
    payload: { userId, email, login, isLogin },
  };
};

const captchaAc = (captcha: captchaType): captchaAcType => {
  return {
    type: "CAPTCHA",
    payload: captcha,
  };
};

type captchaRestoreType = {
  type: typeof CAPTCHA_DEFAULT;
};
export const captchaRestore = (): captchaRestoreType => {
  return {
    type: "CAPTCHA_DEFAULT",
  };
};

// thunk
export const setLoginTC = (formData: any) => async (dispatch: any) => {
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

export const logoutTC = (
  userId: null,
  email: null,
  login: null,
  isLogin: false
) => async (dispatch: any) => {
  let res = await setLoginApi.logout();
  if (res.data.resultCode === 0) {
    dispatch(logoutAC(userId, email, login, isLogin));
  }
};
