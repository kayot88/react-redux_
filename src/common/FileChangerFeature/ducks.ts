import { sendPhotoApi } from "./api";

export const CHANGE_PHOTO = "fileChange/CHANGE_PHOTO";

let initialState = {
  photos: { image: null as string | null },
};

export type InitialStateType = typeof initialState;

// action type
type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V;

type ActionType = Action<"CHANGE_PHOTO", { payload: { image: string } }>;

type PhotoType = {
   image: string ;
};

export type FileChangerActionType = {
  type: typeof CHANGE_PHOTO;
  payload: string;
};
// action creator
const fileChangerAction = (
  newPhotoInProfile: string
): FileChangerActionType => {
  return {
    type: CHANGE_PHOTO,
    payload: newPhotoInProfile,
  };
};

// thunk
export const fileChangerThunk = (newPhotoInProfile: string) => async (
  dispatch: any
) => {
  let res = await sendPhotoApi.sendPhoto(newPhotoInProfile);
  if (res.data.resultCode == 0) {
    dispatch(fileChangerAction(res.data.data.photos.large));
  }
};

const fileChangerReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "CHANGE_PHOTO": {
      return { ...state, photos: action.payload };
    }
    default:
      return state;
  }
};

export default fileChangerReducer;
