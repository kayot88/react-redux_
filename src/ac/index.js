import {
  ADD_POST,
  UPDATE_NEW_POST_TEXT,
  SEND_MESSAGE,
  UPDATE_NEW_MESSAGE_TEXT_SUCCESS,
  UPDATE_NEW_MESSAGE_TEXT_PROCESSING,
} from "../constants/index";

export const addPostCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    payload: text,
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

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  };
};
