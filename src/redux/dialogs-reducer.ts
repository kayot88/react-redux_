import { actionsMessagesTypes } from "../ac/index";
import { DialogType, MessageType } from "../types/types";

export type initialStateType = typeof initialState;

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
  ] as Array<MessageType>,
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
  ] as Array<DialogType>,
  newMessageText: null as string | null,
};

// action type

const dialogsReducer = (
  state: initialStateType = initialState,
  action: actionsMessagesTypes
): initialStateType => {
  switch (action.type) {
    case "UPDATE_NEW_MESSAGE_TEXT_PROCESSING": {
      return { ...state, newMessageText: action.payload };
    }

    case "SEND_MESSAGE": {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: Math.random(),
            message: Object.values(action.payload).toString(),
          },
        ],
      };
    }
    default:
      return state;
  }
};

export default dialogsReducer;
