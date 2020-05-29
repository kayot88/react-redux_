import { ADD_POST, UPDATE_NEW_POST_TEXT } from "./../constants/index";

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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      return { ...state, newPostText: "", posts: [...state.posts, newPost] };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.payload };
    }
    default:
      return state;
  }
};

export default profileReducer;
