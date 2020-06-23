import { usersApi, getAuthUserApi } from "./../api/usersApi";
import { setUserAuth } from "./profilePageAc";

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

export const isLoading = (loading) => {
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

// thunk creators
export const getUsers = (currentPage, countByPage) => {
  return (dispatch) => {
    dispatch(isLoading(true));
    usersApi.getUsers(currentPage, countByPage).then((res) => {
      dispatch(setUsers(res.data.items));
      dispatch(setTotalCount(res.data.totalCount));
      dispatch(isLoading(false));
    });
  };
};

export const onFollowClick = (userId) => {
  return (dispatch) => {
    usersApi.followApi(userId).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(follow(userId));
        dispatch(followInProgres(false, userId));
      }
    });
  };
};
export const onUnFollowClick = (userId) => {
  return (dispatch) => {
    usersApi.unFollowApi(userId).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(unFollow(userId));
        dispatch(followInProgres(false, userId));
      }
    });
  };
};

// auth thunk creators
export const getUserAuth = () => {
  return (dispatch) => {
    getAuthUserApi.getAuthData().then((res) => {
      let { id, email, login } = res.data.data;
      dispatch(setUserAuth(id, email, login));
    });
  };
};
