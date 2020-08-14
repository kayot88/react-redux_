import { setLoginApi } from "../api/loginApi";
import { getUserProfileById } from "./profilePageAc";
import { getUserAuth } from "./usersPage";
import { LOGOUT, CAPTCHA, CAPTCHA_DEFAULT } from "../constants";
import { stopSubmit } from "redux-form";
import { logoutACType, captchaAcType, captchaType, ActionsLoginPageType } from "../types/types";
import { ResultCodes } from "../api/usersApi";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../redux/redux-store";

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

export const setLoginTC = (
  formData: any
): ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsLoginPageType
> => async (dispatch, getState) => {
  let idFromProfile = getState().auth.userId;
  let res = await setLoginApi.postLoginFormData(formData);

  if (res.data.resultCode === ResultCodes.success) {
    dispatch(getUserAuth());
    dispatch(getUserProfileById(res.data.data.userId, (idFromProfile = 8512)));
  } else if (res.data.resultCode === ResultCodes.captchaIsRequired) {
    try {
      let res = await setLoginApi.getCatcha();
      dispatch(captchaAc(res.data.url));
    } catch (error) {}
    debugger;
  }
};


type LogoutResponse  = {
  
}  
export const logoutTC = (
  userId: null,
  email: null,
  login: null,
  isLogin: false
): ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsLoginPageType
> => async (dispatch) => {
  let res = await setLoginApi.logout();
  if (res.data.resultCode === ResultCodes.success) {
    dispatch(logoutAC(userId, email, login, isLogin));
  }
};
