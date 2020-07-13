import { setLoginApi } from "./../api/loginApi";
import { clearUserProfileinStore, getUserProfileById } from "./profilePageAc";
import { getUserAuth } from "./usersPage";
import { LOGOUT } from "../constants";

const  logoutAC = () =>  {
  return {
    type: LOGOUT,
    payload: { userId: null, email: null, login: null, isLogin: false },
  };
}  


export const setLoginTC = (formData) => {
  return (dispatch) => {
    setLoginApi.postLoginFormData(formData).then((res) => {
      //  console.log(res.data.data.userId);
      if (res.data.resultCode === 0) {
        dispatch(getUserAuth());
        dispatch(getUserProfileById(res.data.data.userId));
      } else {
        dispatch(clearUserProfileinStore());
      }
    });
  };
};

export const logoutTC = () => (dispatch) => {
  dispatch(clearUserProfileinStore());
  dispatch(logoutAC());
};
