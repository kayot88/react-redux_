import { isLoading } from "./usersPage";
import { instance } from "../api/usersApi";
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

// thunk creator

export const getUserProfileById_tc = (userId) => {
  return (dispatch) => {
    dispatch(isLoading(true));
    if (!userId) {
      userId = 2;
    }
    getProfileByUserAPI.getUserIdFromUrl(userId).then((res) => {
      dispatch(setProfileToStore(res.data));
      dispatch(isLoading(false));
    });
  };
};
