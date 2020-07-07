import {
  SEND_MESSAGE,
  UPDATE_NEW_MESSAGE_TEXT_PROCESSING,
  UPDATE_NEW_MESSAGE_TEXT_SUCCESS,
} from "./../constants/index";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT_PROCESSING: {
      return { ...state, newMessageText: action.payload };
    }

    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: action.payload }],
      };
    }
    default:
      return state;
  }
};

export default dialogsReducer;
