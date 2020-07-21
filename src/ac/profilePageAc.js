import { isLoadingAC } from "./usersPage";
import { getProfileByUserAPI, userStatusAPI } from "../api/profileApi";
import { FAKE } from "../constants";

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
    await getProfileByUserAPI
      .getUserIdFromUrl(userId || idFromProfile)
      .then((res) => {
        dispatch(setProfileToStore(res.data));
        dispatch(isLoadingAC(false));
      });
  };
};

export const setStatusTC = (status) => {
  return (dispatch) => {
    // debugger
    userStatusAPI.setStatus(status).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setNewStatus(status));
      }
    });
  };
};

export const getStatusTC = (userId) => {
  return (dispatch) => {
    userStatusAPI.getStatus(userId).then((res) => {
      dispatch(setNewStatus(res.data));
    });
  };
};
