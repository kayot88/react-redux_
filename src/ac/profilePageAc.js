import { isLoadingAC } from "./usersPage";
import { getProfileByUserAPI } from "../api/profileApi";

export const setProfileToStore = (profile) => {
  return {
    type: "SET_PROFILE_TO_STORE",
    payload: profile,
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

export const getUserProfileById = (userId=8512) => {
  return (dispatch) => {
    dispatch(isLoadingAC(true));
    if (!userId) {
      return (userId = 8512);
    }
    getProfileByUserAPI.getUserIdFromUrl(userId=8512).then((res) => {
      dispatch(setProfileToStore(res.data));
      dispatch(isLoadingAC(false));
    });
  };
};
