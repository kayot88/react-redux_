import { usersApi, getAuthUserApi } from "../api/usersApi";
import { setUserAuth, getUserProfileById } from "./profilePageAc";
import {
  INIT_SUCCESS,
  FOLLOW,
  SET_CURRENT_PAGE,
  SET_TOTAL_COUNT,
  UNFOLLOW,
  SET_USERS,
  IS_LOADING,
  FOLLOW_IN_PROGRES,
} from "../constants/index";
import { sendMessageCreator } from ".";
import { PhotosType, UserType, followInProgresPayload } from "../types/types";

// action creators
type followType = {
  type: typeof FOLLOW;
  payload: number;
};
export const follow = (userId: number): followType => {
  return {
    type: "FOLLOW",
    payload: userId,
  };
};

type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
};

export const setCurrentPage = (pageId: number): setCurrentPageType => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: pageId,
  };
};

type setTotalCountType = {
  type: typeof SET_TOTAL_COUNT;
  payload: number;
};
export const setTotalCount = (totalCount: number): setTotalCountType => {
  return {
    type: "SET_TOTAL_COUNT",
    payload: totalCount,
  };
};

type unFollowType = {
  type: typeof UNFOLLOW;
  payload: number;
};

export const unFollow = (userId: number): unFollowType => {
  return {
    type: "UNFOLLOW",
    payload: userId,
  };
};

type setUsersType = {
  type: typeof SET_USERS;
  payload: Array<UserType>;
};
export const setUsers = (users: Array<UserType>): setUsersType => {
  return {
    type: "SET_USERS",
    payload: users,
  };
};

type isLoadingACType = {
  type: typeof IS_LOADING;
  payload: boolean;
};
export const isLoadingAC = (loading: boolean): isLoadingACType => {
  return {
    type: "IS_LOADING",
    payload: loading,
  };
};

type followInProgresType = {
  type: typeof FOLLOW_IN_PROGRES;
  payload: followInProgresPayload;
};

// CHECK IT
export const followInProgres = (
  following: boolean,
  userId: number
): followInProgresType => {
  return {
    type: "FOLLOW_IN_PROGRES",
    payload: { following, userId },
  };
};

// let INIT_SUCCESS :"INIT_SUCCESS";

type initAppACType = {
  type: typeof INIT_SUCCESS;
};

export const initAppAC = (): initAppACType => {
  return {
    type: "INIT_SUCCESS",
  };
};

// thunk creators
export const getUsers = (currentPage: number, countByPage: number) => {
  return async (dispatch: any) => {
    try {
      dispatch(isLoadingAC(true));
      let res = await usersApi.getUsers(currentPage, countByPage);
      dispatch(setUsers(res.data.items));
      dispatch(setTotalCount(res.data.totalCount));
      dispatch(isLoadingAC(false));
    } catch (error) {
      debugger;
    }
  };
};
// utis func
const followUnfollow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  followFlow: any
) => {
  let res = await apiMethod(userId);
  if (res.data.resultCode === 0) {
    dispatch(followFlow(userId));
    dispatch(followInProgres(false, userId));
  }
};

export const onFollowClick = (userId: number) => {
  return async (dispatch: any) => {
    return followUnfollow(
      dispatch,
      userId,
      usersApi.followApi.bind(usersApi),
      follow
    );
  };
};
export const onUnFollowClick = (userId: number) => {
  return async (dispatch: any) => {
    return followUnfollow(
      dispatch,
      userId,
      usersApi.unFollowApi.bind(usersApi),
      unFollow
    );
  };
};

// auth thunk creators
export const getUserAuth = () => {
  return async (dispatch: any) => {
    try {
      let res = await getAuthUserApi.getAuthData();
      let { id, email, login } = res.data.data;
      if (res.data.resultCode !== 1) {
        dispatch(getUserProfileById(id));
        dispatch(setUserAuth(id, email, login));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const initAPPTC = () => async (dispatch: any) => {
  try {
    await dispatch(getUserAuth());
    await dispatch(initAppAC());
  } catch (error) {
    console.log(error);
  }
};

export const newMessageThunk = (newMessage: string) => {
  return (dispatch: any) => {
    dispatch(sendMessageCreator(newMessage));
  };
};
