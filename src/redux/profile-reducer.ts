import { CHANGE_PHOTO } from "../common/FileChangerFeature/ducks";
import {
  ADD_POST,
  SET_PROFILE_TO_STORE,
  CLEAR_PROFILE,
  SET_STATUS,
} from "../constants/index";
import { ProfileType, PostType } from "../types/types";

let initialState = {
  posts: [
    {
      id: 1,
      message: "Hi, how are you?",
      likesCount: 10,
    },
    {
      id: 2,
      message: "It's my first post",
      likesCount: 50,
    },
    {
      id: 3,
      message: "Yo",
      likesCount: 2,
    },
  ] as Array<PostType>,
  newPostText: null as string | null,
  profile: null as {} | null,
  userStatus: null as string | null,
};

export type initialStateProfileType = typeof initialState;

// action type
type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V;

type ActionType =
  | Action<"SET_PROFILE_TO_STORE", ProfileType>
  | Action<"CLEAR_PROFILE">
  | Action<"ADD_POST", PostType>
  | Action<"CHANGE_PHOTO", { value: number }>
  | Action<"SET_STATUS", { value: number }>;

const profileReducer = (
  state = initialState,
  action: any
): initialStateProfileType => {
  switch (action.type) {
    case SET_PROFILE_TO_STORE: {
      return { ...state, profile: action.payload };
    }
    case CLEAR_PROFILE: {
      return { ...state, profile: {} };
    }
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.payload,
        likesCount: 0,
      };

      return { ...state, newPostText: "", posts: [...state.posts, newPost] };
    }
    case CHANGE_PHOTO: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.payload },
      };
    }

    case SET_STATUS: {
      return { ...state, userStatus: action.payload };
    }

    default:
      return state;
  }
};

export default profileReducer;
