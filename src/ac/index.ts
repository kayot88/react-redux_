import {
  ADD_POST,
  SEND_MESSAGE,
  UPDATE_NEW_MESSAGE_TEXT_SUCCESS,
  UPDATE_NEW_MESSAGE_TEXT_PROCESSING,
} from "../constants/index";
import {
  updateMessageTextCreator_ProcessType,
  MessageActionTypes,
} from "../types/types";

type addPostCreatorType = {
  type: typeof ADD_POST;
  payload: string;
};
export const addPostCreator = (newText: string): addPostCreatorType => {
  return {
    type: ADD_POST,
    payload: newText,
  };
};

export const updateMessageTextCreator_Success = (): MessageActionTypes => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT_SUCCESS,
  };
};

export const updateMessageTextCreator_Process = (
  text: string
): updateMessageTextCreator_ProcessType => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT_PROCESSING,
    payload: text,
  };
};

export const sendMessageCreator = (newMessage: string): MessageActionTypes => {
  return {
    type: "SEND_MESSAGE",
    payload: newMessage,
  };
};
