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
