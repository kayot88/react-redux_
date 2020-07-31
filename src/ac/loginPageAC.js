import { setLoginApi } from "./../api/loginApi";
import { getUserProfileById } from "./profilePageAc";
import { getUserAuth } from "./usersPage";
import { LOGOUT } from "../constants";
import { stopSubmit } from "redux-form";

const logoutAC = () => {
  return {
    type: LOGOUT,
    payload: { userId: null, email: null, login: null, isLogin: false },
  };
};

export const setLoginTC = (formData) => async (dispatch) => {
  let res = await setLoginApi.postLoginFormData(formData);
  if (res.data.resultCode === 0) {
    dispatch(getUserAuth());
    dispatch(getUserProfileById(res.data.data.userId));
  } else {
    dispatch(stopSubmit("loginForm", { _error: res.data.messages }));
  }
};

export const logoutTC = () => async (dispatch) => {
  let res = await setLoginApi.logout();
  if (res.data.resultCode === 0) {
    dispatch(logoutAC());
  }
};
