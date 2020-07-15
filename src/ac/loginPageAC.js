import { setLoginApi } from "./../api/loginApi";
import { clearUserProfileinStore, getUserProfileById } from "./profilePageAc";
import { getUserAuth } from "./usersPage";
import { LOGOUT } from "../constants";
import { SubmissionError, stopSubmit } from "redux-form";

const logoutAC = () => {
  return {
    type: LOGOUT,
    payload: { userId: null, email: null, login: null, isLogin: false },
  };
};

export const setLoginTC = (formData) => (dispatch) =>
  setLoginApi.postLoginFormData(formData).then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(getUserAuth());
      dispatch(getUserProfileById(res.data.data.userId));
    } else {
      dispatch(stopSubmit("loginForm", { _error: res.data.messages }));
      // dispatch(clearUserProfileinStore());
    }
  });

export const logoutTC = () => (dispatch) => {
  return setLoginApi.logout().then((res) => {
    if (res.data.resultCode === 0) {
      // dispatch(clearUserProfileinStore());
      dispatch(logoutAC());
    }
  });
};
