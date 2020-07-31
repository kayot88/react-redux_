import { usersApi, getAuthUserApi } from "./../api/usersApi";
import { setUserAuth, getUserProfileById } from "./profilePageAc";
import { INIT_SUCCESS } from "./../constants/index";
import { sendMessageCreator } from ".";

// action creators
export const follow = (userId) => {
  return {
    type: "FOLLOW",
    payload: userId,
  };
};

export const setCurrentPage = (pageId) => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: pageId,
  };
};
export const setTotalCount = (totalCount) => {
  return {
    type: "SET_TOTAL_COUNT",
    payload: totalCount,
  };
};

export const unFollow = (userId) => {
  return {
    type: "UNFOLLOW",
    payload: userId,
  };
};

export const setUsers = (users) => {
  return {
    type: "SET_USERS",
    payload: users,
  };
};

export const isLoadingAC = (loading) => {
  return {
    type: "IS_LOADING",
    payload: loading,
  };
};

export const followInProgres = (following, userId) => {
  return {
    type: "FOLLOW_IN_PROGRES",
    following,
    userId,
  };
};

export const initAppAC = () => {
  return {
    type: INIT_SUCCESS,
  };
};

// thunk creators
export const getUsers = (currentPage, countByPage) => {
  return async (dispatch) => {
    dispatch(isLoadingAC(true));
    let res = await usersApi.getUsers(currentPage, countByPage);
    dispatch(setUsers(res.data.items));
    dispatch(setTotalCount(res.data.totalCount));
    dispatch(isLoadingAC(false));
  };
};
// utis func
const followUnfollow = async (dispatch, userId, apiMethod, followFlow) => {
  let res = await apiMethod(userId);
  if (res.data.resultCode === 0) {
    dispatch(followFlow(userId));
    dispatch(followInProgres(false, userId));
  }
};

export const onFollowClick = (userId) => {
  return async (dispatch) => {
    return followUnfollow(
      dispatch,
      userId,
      usersApi.followApi.bind(usersApi),
      follow
    );
  };
};
export const onUnFollowClick = (userId) => {
  return async (dispatch) => {
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
  return async (dispatch) => {
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

export const initAPPTC = () => async (dispatch) => {
  try {
    await dispatch(getUserAuth());
    await dispatch(initAppAC());
  } catch (error) {
    console.log(error);
  }
};

export const newMessageThunk = (newMessage) => {
  return (dispatch) => {
    dispatch(sendMessageCreator(newMessage));
  };
};
