import { saveProfileDataApi } from "./api";
import { getUserProfileById } from "../../../ac/profilePageAc";
import { stopSubmit } from "redux-form";

export const UPDATE_PROFILE = "profileData/UPDATE_PROFILE";

let initialState = {};

// action creator
const profileDataAction = (formData) => {
  debugger;
  return {
    type: UPDATE_PROFILE,
    payload: formData,
  };
};

// thunk
export const profileDataThunk = (formData) => async (dispatch, getState) => {
  let res = await saveProfileDataApi.saveProfileData(formData);
  console.log(res);
  let userId = getState().auth.userId;

  if (res.data.resultCode === 0) {
    dispatch(getUserProfileById(userId));
  } else {
    dispatch(stopSubmit("ProfileDataForm", { _error: res.data.messages[0] }));
    return Promise.reject(res.data.messages[0]);
  }
};

const profileDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE: {
      return { ...state, photos: { image: action.payload } };
    }
    default:
      return state;
  }
};

export default profileDataReducer;
