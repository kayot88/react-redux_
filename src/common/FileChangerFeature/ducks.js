import { sendPhotoApi } from "./api";

export const CHANGE_PHOTO = "fileChange/CHANGE_PHOTO";

let initialState = {
  photos: { image: null },
};

// action creator
const fileChangerAction = (newPhotoInProfile) => {
  return {
    type: CHANGE_PHOTO,
    payload: newPhotoInProfile,
  };
};

// thunk
export const fileChangerThunk = (newPhotoInProfile) => async (dispatch) => {
  let res = await sendPhotoApi.sendPhoto(newPhotoInProfile);
  if (res.data.resultCode == 0) {
    dispatch(fileChangerAction(res.data.data.photos.large));
  }
};

const fileChangerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PHOTO: {
      return { ...state, photos: { image: action.payload } };
    }
    default:
      return state;
  }
};

export default fileChangerReducer;
