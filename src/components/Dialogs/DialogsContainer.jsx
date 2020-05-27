import React from "react";
import { sendMessageCreator, updateMessageTextCreator } from "../../ac";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const { store } = props;
  const state = store.getState();
  let onSendMessageClick = () => {
    store.dispatch(sendMessageCreator());
  };

  let onNewMessageText = (e) => {
    let text = e.target.value;
    store.dispatch(updateMessageTextCreator(text));
  };
  return (
    <Dialogs
      dialogsPage={state.dialogsPage}
      onSendMessageClick={onSendMessageClick}
      onNewMessageText={onNewMessageText}
    />
  );
};

export default DialogsContainer;
