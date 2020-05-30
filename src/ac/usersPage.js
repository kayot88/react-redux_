export const follow = (userId) => {
  return {
    type: "FOLLOW",
    payload: userId,
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
