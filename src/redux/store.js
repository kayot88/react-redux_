import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
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
      newPostText: "a",
    },
    dialogsPage: {
      messages: [
        {
          id: 1,
          message: "Hi!",
        },
        {
          id: 2,
          message: "How are you?",
        },
        {
          id: 3,
          message: "Yo",
        },
      ],
      dialogs: [
        {
          id: 1,
          name: "Igor",
        },
        {
          id: 2,
          name: "Dima",
        },
        {
          id: 3,
          name: "Sergei",
        },
      ],
      newMessageText: "",
    },
  },
  _callSubscriber() {
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;

  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber();
  },
};


export default store;
