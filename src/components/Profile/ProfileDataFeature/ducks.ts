import { saveProfileDataApi } from "./api";
import { getUserProfileById } from "../../../ac/profilePageAc";
import { stopSubmit } from "redux-form";
import { ProfileType } from "../../../types/types";
import { AppStateType } from "../../../redux/redux-store";
import { DispatchProp } from "react-redux";

export const UPDATE_PROFILE = "profileData/UPDATE_PROFILE";
// state type
let initialState = {};
export type InitialStateType = typeof initialState;

// action creator
type profileDataActionType = {
  type: typeof UPDATE_PROFILE;
  payload: any;
};
const profileDataAction = (formData: any): profileDataActionType => {
  return {
    type: UPDATE_PROFILE,
    payload: formData,
  };
};

// thunk
export const profileDataThunk = (formData: ProfileType) => async (
  dispatch: any,
  getState: any
) => {
  let data = await saveProfileDataApi.saveProfileData(formData);
  console.log(data);
  // console.log(res);
  let idFromProfile = getState().auth.userId;
  // console.log(userId);
  if (data.resultCode === 0) {
    dispatch(getUserProfileById(8512, idFromProfile));
  } else {
    dispatch(stopSubmit("ProfileDataForm", { _error: data.messages[0] }));
    return Promise.reject(data.messages[0]);
  }
};

// action type
type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V;

type ActionType = Action<
  "UPDATE_PROFILE",
  { payload: { photos: { image: any } } }
>;

// reducer
const profileDataReducer: InitialStateType = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "UPDATE_PROFILE": {
      return { ...state, photos: { image: action.payload } };
    }
    default:
      return state;
  }
};

export default profileDataReducer;
