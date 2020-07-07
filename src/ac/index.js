import {
  ADD_POST,
  SEND_MESSAGE,
  UPDATE_NEW_MESSAGE_TEXT_SUCCESS,
  UPDATE_NEW_MESSAGE_TEXT_PROCESSING,
} from "../constants/index";

export const addPostCreator = (newText) => {
         return {
           type: ADD_POST,
           payload: newText
         };
       };

export const updateMessageTextCreator_Success = () => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT_SUCCESS,
  };
};
export const updateMessageTextCreator_Process = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT_PROCESSING,
    payload: text,
  };
};

export const sendMessageCreator = (newMessage) => {
  return {
    type: SEND_MESSAGE,
    payload: newMessage,
  };
};
