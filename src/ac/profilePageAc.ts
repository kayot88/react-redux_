import { getProfileByUserAPI, userStatusAPI } from "../api/profileApi";
import { isLoadingAC } from "./usersPage";
import {
  SET_PROFILE_TO_STORE,
  SET_STATUS,
  SET_USER_AUTH,
  CLEAR_PROFILE,
} from "../constants";
import { Profile, setUserAuthType } from "../types/types";

type setProfileToStoreType = {
  type: typeof SET_PROFILE_TO_STORE;
  payload: Profile;
};


export const setProfileToStore = (profile: Profile): setProfileToStoreType => {
  return {
    type: "SET_PROFILE_TO_STORE",
    payload: profile,
  };
};

type setNewStatusType = {
  type: typeof SET_STATUS;
  payload: string;
};
export const setNewStatus = (
  status: string = "no status"
): setNewStatusType => {
  return {
    type: "SET_STATUS",
    payload: status,
  };
};


export const setUserAuth = (
  userId: number,
  email: string,
  login: string
): setUserAuthType => {
  return {
    type: "SET_USER_AUTH",
    payload: { userId, email, login },
  };
};

type clearUserProfileinStoreType = {
  type: typeof CLEAR_PROFILE;
};
export const clearUserProfileinStore = (): clearUserProfileinStoreType => {
  return {
    type: "CLEAR_PROFILE",
  };
};

// thunk creator
export const getUserProfileById = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(isLoadingAC(true));
    let res = await getProfileByUserAPI.getUserIdFromUrl(userId);
    dispatch(setProfileToStore(res.data));
    dispatch(isLoadingAC(false));
  };
};

export const setStatusTC = (status: string) => {
  return async (dispatch: any) => {
    let res = await userStatusAPI.setStatus(status);
    if (res.data.resultCode === 0) {
      dispatch(setNewStatus(status));
    }
    Promise.reject();
  };
};

export const getStatusTC = (userId: number) => {
  return async (dispatch: any) => {
    let res = await userStatusAPI.getStatus(userId);
    dispatch(setNewStatus(res.data));
  };
};
