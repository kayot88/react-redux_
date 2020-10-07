import { createSelector } from "reselect";
import { AppStateType } from "../../../redux/redux-store";

const userPhotoSelector = (state: AppStateType) => {
  return state.userPhoto;
};

export const getUserPhotoReselect = createSelector(
  userPhotoSelector,
  (photo) => photo
);