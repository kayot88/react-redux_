import {
  ADD_POST,
  SET_PROFILE_TO_STORE,
  CLEAR_PROFILE,
  SET_STATUS,
} from "./../constants/index";

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
  ],
  newPostText: "",
  profile: {},
  userStatus: "",
};

const profileReducer = (state = initialState, action) => {
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

    case SET_STATUS: {
      return { ...state, userStatus: action.payload };
    }

    default:
      return state;
  }
};

export default profileReducer;
