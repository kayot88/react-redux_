import { ThunkAction } from "redux-thunk";
import { ResultCodes } from "../api/api";
import { setLoginApi } from "../api/loginApi";
import { AppStateType } from "../redux/redux-store";
import { ActionsLoginPageType, captchaType } from "../types/types";
import { getUserProfileById } from "./profilePageAc";
import { getUserAuth } from "./usersPage";

export const loginPageActions = {
  logoutAC: (userId: null, email: null, login: null, isLogin: false) => {
    return {
      type: "LOGOUT",
      payload: { userId, email, login, isLogin },
    } as const;
  },
  captchaAc: (captcha: captchaType) => {
    return {
      type: "CAPTCHA",
      payload: captcha,
    } as const;
  },
  captchaRestore: () => {
    return {
      type: "CAPTCHA_DEFAULT",
    } as const;
  },
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
  let data = await setLoginApi
    .postLoginFormData(formData)
    .then((res) => res.data);

  if (data.resultCode === ResultCodes.success) {
    dispatch(getUserAuth());
    dispatch(getUserProfileById(data.data.userId, (idFromProfile = 8512)));
  } else if (data.resultCode === ResultCodes.captchaIsRequired) {
    try {
      let res = await setLoginApi.getCatcha();
      dispatch(loginPageActions.captchaAc(data.url));
    } catch (error) {}
    debugger;
  }
};

type LogoutResponse = {};
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
    dispatch(loginPageActions.logoutAC(userId, email, login, isLogin));
  }
};
