import { createSelector } from "reselect";

// selectors
export const getProfile = (state) => {
  return state.profilePage.profile
};
export const getLoading = (state) => {
  return state.usersPage.isLoading
};
export const getUserStatus = (state) => {
  return state.profilePage.userStatus
};
export const getUserId = (state) => {
  return state.auth.userId
};

// reselectors
export const getUserStatusReselect = createSelector(
  getUserStatus,
  (status) => status
);
export const getLoadingReselect = createSelector(
  getLoading,
  (loading) => loading
);
export const getProfileReselect = createSelector(
  getProfile,
  (profile) => profile
);
export const getUserID = createSelector(getUserId, (id) => id);
