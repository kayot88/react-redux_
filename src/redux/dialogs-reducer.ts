import {
  SEND_MESSAGE,
  UPDATE_NEW_MESSAGE_TEXT_PROCESSING,
} from "../constants/index";
import {
  updateMessageTextCreator_ProcessType,
  sendMessageCreatorType,
} from "../types/types";

type actionType = {
  type: string;
  payload: any;
};
type MessageType = {
  id: number | null;
  message: string | null;
};
type DialogType = {
  id: number | null;
  name: string | null;
};

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
  newMessageText: null as string | null ,
}; 

// action type
type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V;

type ActionType =
  | Action<"UPDATE_NEW_MESSAGE_TEXT_PROCESSING", updateMessageTextCreator_ProcessType>
  | Action<"SEND_MESSAGE", sendMessageCreatorType>;





const dialogsReducer = (
  state: initialStateType = initialState,
  action: ActionType
): initialStateType => {
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
