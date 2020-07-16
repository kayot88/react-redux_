export const getProfile = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};
export const getLoading = (state) => {
  return {
    isLoading: state.usersPage.isLoading,
  };
};
export const getUserStatus = (state) => {
  return {
    status: state.profilePage.userStatus,
  };
};
