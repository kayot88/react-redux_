import { createSelector } from "reselect";

const getProfile = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};
const getLoading = (state) => {
  return {
    isLoading: state.usersPage.isLoading,
  };
};
const getUserStatus = (state) => {
  console.log(state.profilePage.userStatus);
  return {
    status: state.profilePage.userStatus,
  };
};
export const getUserStatusReselect = createSelector(
  getUserStatus,
  (userStatus) => {
    return userStatus.status;
  }
);
export const getLoadingReselect = createSelector(getLoading, (isLoading) => {
  return isLoading;
});
export const getProfileReselect = createSelector(getProfile, (profile) => {
  return profile;
});
