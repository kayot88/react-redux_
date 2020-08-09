

import { createSelector } from "reselect";
import { AppStateType } from "../redux/redux-store";

// usersSelectors
export const usersSelector = (state: AppStateType) => {
         return state.usersPage.users;
       };
export const totalCountSelector = (state: AppStateType) => {
         return state.usersPage.totalCount;
       };
export const countByPageSelector = (state: AppStateType) => {
         return state.usersPage.countByPage;
       };
export const currentPageSelector = (state: AppStateType) => {
         return state.usersPage.currentPage;
       };
export const isLoadingSelector = (state: AppStateType) => {
         return state.usersPage.isLoading;
       };
export const captchaSelector = (state: AppStateType) => {
         return state.auth.captcha;
       };
export const isFollowingSelector = (state: AppStateType) => {
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
export const captchaReselect = createSelector(captchaSelector, (data) => data);
export const isFollowingReselect = createSelector(
  isFollowingSelector,
  (data) => data
);

// profile selectors
export const getProfile = (state: AppStateType) => {
         return state.profilePage.profile;
       };

export const getLoading = (state: AppStateType) => {
         return state.usersPage.isLoading;
       };
export const getUserStatus = (state: AppStateType) => {
         return state.profilePage.userStatus;
       };
export const getUserId = (state: AppStateType) => {
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
const isLoginSelector = (state: AppStateType) => state.auth.isLogin;
const isAuthSelector = (state: AppStateType) => state.initApp.isInitialized;

// reselect login
export const isLoginReselect = createSelector(isLoginSelector, (data) => data);
export const isAuthReselect = createSelector(isAuthSelector, (data) => data);
