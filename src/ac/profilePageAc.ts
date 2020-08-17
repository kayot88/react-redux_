import { getProfileByUserAPI, userStatusAPI } from "../api/profileApi";
import { BaseThunkType, InferActionTypes } from "../redux/redux-store";
import { ProfileType } from "../types/types";

export type ProfileActionsTypes = InferActionTypes<typeof ProfileActions>;

export const ProfileActions = {
  setProfileToStore: (profile: ProfileType) => {
    return {
      type: "SET_PROFILE_TO_STORE",
      payload: profile,
    } as const;
  },
  setNewStatus: (status: string = "no status") => {
    return {
      type: "SET_STATUS",
      payload: status,
    } as const;
  },
  setUserAuth: (userId: number, email: string, login: string) => {
    return {
      type: "SET_USER_AUTH",
      payload: { userId, email, login },
    } as const;
  },
  clearUserProfileinStore: () => {
    return {
      type: "CLEAR_PROFILE",
    } as const;
  },
  isLoadingAC: (loading: boolean) => {
    return {
      type: "IS_LOADING",
      payload: loading,
    } as const;
  },
};

// thunk creator
export const getUserProfileById = (
  userId: number,
  idFromProfile: number
): BaseThunkType<ProfileActionsTypes> => {
  return async (dispatch) => {
    dispatch(ProfileActions.isLoadingAC(true));
    let res = await getProfileByUserAPI.getUserIdFromUrl(userId, idFromProfile);
    dispatch(ProfileActions.setProfileToStore(res.data));
    dispatch(ProfileActions.isLoadingAC(false));
  };
};

export const setStatusTC = (
  status: string
): BaseThunkType<ProfileActionsTypes> => {
  return async (dispatch) => {
    let data = await userStatusAPI.setStatus(status);
    if (data.resultCode === 0) {
      dispatch(ProfileActions.setNewStatus(status));
    }
    Promise.reject();
  };
};

export const getStatusTC = (
  userId: number
): BaseThunkType<ProfileActionsTypes> => {
  return async (dispatch) => {
    let data = await userStatusAPI.getStatus(userId);
    dispatch(ProfileActions.setNewStatus(data));
  };
};
