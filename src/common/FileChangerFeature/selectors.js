import { createSelector } from "reselect";

const userPhotoSelector = (state) => {
  console.log("state.userPhoto", state.userPhoto);
  return state.userPhoto;
};

export const getUserPhotoReselect = createSelector(
  userPhotoSelector,
  (photo) => photo
);
