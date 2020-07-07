import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
  const { dialogsPage, onSendMessageClick } = props;
  const onSubmit = (formData) => {
    onSendMessageClick(formData.dialogsFormText);
  };

  let dialogsElements = dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} />
  ));
  let messagesElements = dialogsPage.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <DialogsForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

let DialogsForm = (props) => {
  console.log("DialogsFormProps", props);
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="dialogsFormText"
          component="textarea"
          placeholder="Enter your message"
        ></Field>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

DialogsForm = reduxForm({
  form: "dialogs",
})(DialogsForm);

export default Dialogs;
