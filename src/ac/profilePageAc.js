import { getProfileByUserAPI, userStatusAPI } from "../api/profileApi";
import { isLoadingAC } from "./usersPage";

export const setProfileToStore = (profile) => {
  return {
    type: "SET_PROFILE_TO_STORE",
    payload: profile,
  };
};

export const setNewStatus = (status = "no status") => {
  return {
    type: "SET_STATUS",
    payload: status,
  };
};

export const setUserAuth = (userId, email, login) => {
  return {
    type: "SET_USER_AUTH",
    payload: { userId, email, login },
  };
};

export const clearUserProfileinStore = () => {
  return {
    type: "CLEAR_PROFILE",
  };
};

// thunk creator
export const getUserProfileById = (userId, idFromProfile) => {
  return async (dispatch) => {
    dispatch(isLoadingAC(true));
    let res = await getProfileByUserAPI.getUserIdFromUrl(
      userId || idFromProfile
    );
    dispatch(setProfileToStore(res.data));
    dispatch(isLoadingAC(false));
  };
};

export const setStatusTC = (status) => {
  return (dispatch) => {
    let res = userStatusAPI.setStatus(status);
    if (res.data.resultCode === 0) {
      dispatch(setNewStatus(status));
    }
  };
};

export const getStatusTC = (userId) => {
  return (dispatch) => {
    let res = userStatusAPI.getStatus(userId);
    dispatch(setNewStatus(res.data));
  };
};
