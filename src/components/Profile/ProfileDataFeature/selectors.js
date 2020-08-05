import { createSelector } from "reselect";

const userPhotoSelector = (state) => {
  return state.userPhoto;
};

export const getUserPhotoReselect = createSelector(
  userPhotoSelector,
  (photo) => photo
);