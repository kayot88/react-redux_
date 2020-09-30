import { Dispatch } from "redux";
import { BaseThunkType, InferActionTypes } from "../redux/redux-store";
import { ActionTypes } from "./usersPage";


export type actionsMessagesTypes = InferActionTypes<typeof actionsMessages>;

export type DispatchMessagesTypes = Dispatch<ActionTypes>;

export type ThunkMessagesType = BaseThunkType<ActionTypes>;

export const actionsMessages = {
  addPostCreator: (newText: string) => {
    return {
      type: "ADD_POST",
      payload: newText,
    } as const;
  },
  updateMessageTextCreator_Success: () => {
    return {
      type: "UPDATE_NEW_MESSAGE_TEXT_SUCCESS",
    } as const;
  },
  updateMessageTextCreator_Process: (text: string) => {
    return {
      type: "UPDATE_NEW_MESSAGE_TEXT_PROCESSING",
      payload: text,
    } as const;
  },
  sendMessageCreator: (newMessage: string) => {
    return {
      type: "SEND_MESSAGE",
      payload: newMessage,
    } as const;
  },
};
