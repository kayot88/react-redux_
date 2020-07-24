import { createSelector } from "reselect";

// usersSelectors
export const usersSelector = (state) => {
  return state.usersPage.users;
};
export const totalCountSelector = (state) => {
  return state.usersPage.totalCount;
};
export const countByPageSelector = (state) => {
  return state.usersPage.countByPage;
};
export const currentPageSelector = (state) => {
  return state.usersPage.currentPage;
};
export const isLoadingSelector = (state) => {
  return state.usersPage.isLoading;
};
export const isFollowingSelector = (state) => {
  return state.usersPage.followInProgres;
};

// reselect users selectors
export const usersReselect = createSelector(usersSelector, (users) => users);
export const totalCountReselect = createSelector(
  totalCountSelector,
  (data) => data
);
export const countByPageReselect = createSelector(
  countByPageSelector,
  (data) => data
);
export const currentPageReselect = createSelector(
  currentPageSelector,
  (data) => data
);
export const isLoadingReselect = createSelector(
  isLoadingSelector,
  (data) => data
);
export const isFollowingReselect = createSelector(
  isFollowingSelector,
  (data) => data
);

// profile selectors
export const getProfile = (state) => {
  return state.profilePage.profile;
};

export const getLoading = (state) => {
  return state.usersPage.isLoading;
};
export const getUserStatus = (state) => {
  return state.profilePage.userStatus;
};
export const getUserId = (state) => {
  return state.auth.userId;
};

// reselect profile selectors
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
export const getUserIDReselect = createSelector(getUserId, (id) => id);

// login selectors
const isLoginSelector = (state) => state.auth.isLogin;
const isAuthSelector = (state) => state.initApp.isInitialized;

// reselect login
export const isLoginReselect = createSelector(isLoginSelector, (data) => data);
export const isAuthReselect = createSelector(isAuthSelector, (data) => data);
