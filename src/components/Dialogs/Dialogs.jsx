import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const {
    dialogsPage,
    onNewMessageText,
    onSendMessageClick,
  } = props;

  let dialogsElements = dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} />
  ));
  let messagesElements = dialogsPage.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let newMessageTextUI = dialogsPage.newMessageText;

  

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <div>
            <textarea
              onChange={onNewMessageText}
              value={newMessageTextUI}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
