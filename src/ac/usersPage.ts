import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { sendMessageCreator } from ".";
import { ResultCodes } from "../api/api";
import { getAuthUserApi } from "../api/authApi";
import { usersApi } from "../api/usersApi";
import { AppStateType, InferActionTypes, BaseThunkType } from "../redux/redux-store";
import { UserType } from "../types/types";
import { ProfileActions } from "./profilePageAc";
import { getUserProfileById } from "./profilePageAc";
// action creators

export type ActionTypes = InferActionTypes<typeof UserPageActions>;

export const UserPageActions = {
  follow: (userId: number) => {
    return {
      type: "FOLLOW",
      payload: userId,
    };
  },
  setCurrentPage: (pageId: number) => {
    return {
      type: "SET_CURRENT_PAGE",
      payload: pageId,
    };
  },
  setTotalCount: (totalCount: number) => {
    return {
      type: "SET_TOTAL_COUNT",
      payload: totalCount,
    };
  },
  unFollow: (userId: number) => {
    return {
      type: "UNFOLLOW",
      payload: userId,
    };
  },
  setUsers: (users: Array<UserType>) => {
    return {
      type: "SET_USERS",
      payload: users,
    } as const;
  },
  isLoadingAC: (loading: boolean) => {
    return {
      type: "IS_LOADING",
      payload: loading,
    };
  },
  followInProgres: (following: boolean, userId: number) => {
    return {
      type: "FOLLOW_IN_PROGRES",
      payload: { following, userId },
    };
  },
  initAppAC: () => {
    return {
      type: "SN/APP/INIT_SUCCESS",
      a: "asd",
    } as const;
  },
};

// thunk creators
type DispatchTypes = Dispatch<ActionTypes>;
type GetStateType = () => AppStateType;
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;
type ThunkType = BaseThunkType<ActionTypes>;


// 1. (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType ) => {
// 2.const = ():ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => (dispatch, getState): => {
export const getUsers = (
  currentPage: number,
  countByPage: number
): ThunkType => {
  return async (
    // dispatch: DispatchTypes,
    // getState: GetStateType
    dispatch,
    getState
  ) => {
    try {
      dispatch(UserPageActions.isLoadingAC(true));
      let data = await usersApi
        .getUsers(currentPage, countByPage)
        .then((res) => res.data);
      dispatch(UserPageActions.setUsers(data.items));
      dispatch(UserPageActions.setTotalCount(data.totalCount));
      dispatch(UserPageActions.isLoadingAC(false));
    } catch (error) {
      console.log("error.message: ", error.message);
    }
  };
};

// utis func
const followUnfollow = async (
  dispatch: DispatchTypes,
  userId: number,
  apiMethod: any,
  followFlow: (userId: number) => any
) => {
  let res = await apiMethod(userId);
  if (res.data.resultCode === 0) {
    dispatch(followFlow(userId));
    dispatch(UserPageActions.followInProgres(false, userId));
  }
};

export const onFollowClick = (userId: number): ThunkType => {
  return async (dispatch) => {
    return followUnfollow(
      dispatch,
      userId,
      usersApi.followApi.bind(usersApi),
      UserPageActions.follow
    );
  };
};
export const onUnFollowClick = (userId: number): ThunkType => {
  return async (dispatch) => {
    return followUnfollow(
      dispatch,
      userId,
      usersApi.unFollowApi.bind(usersApi),
      UserPageActions.unFollow
    );
  };
};

// auth thunk creators
export const getUserAuth = (): ThunkType => {
  return async (dispatch: any) => {
    try {
      let res = await getAuthUserApi.getAuthData();
      let { id, email, login } = res.data.data;
      const idFromProfile: number = 8512; //hardcode
      if (res.data.resultCode !== ResultCodes.error) {
        dispatch(getUserProfileById(id, idFromProfile));
        dispatch(ProfileActions.setUserAuth(id, email, login));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const initAPPTC = () => async (dispatch: any) => {
  try {
    await dispatch(getUserAuth());
    await dispatch(UserPageActions.initAppAC());
  } catch (error) {
    console.log(error);
  }
};

export const newMessageThunk = (newMessage: string) => {
  return (dispatch: any) => {
    dispatch(sendMessageCreator(newMessage));
  };
};
