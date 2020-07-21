import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { validate, renderField  } from "./../../assets/validation/formValidate";
// import s from "./../../assets/validation/formValidate.module.css";

const Dialogs = (props) => {
  const { dialogsPage, onSendMessageClick } = props;
  let onSubmit = (formData) => {
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
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="dialogsFormText"
          component={renderField('input')}
          label="Enter your message"
          type="text"
        ></Field>
      </div>
      <div>
        <button disabled={props.pristine || props.submitting}>Send</button>
      </div>
    </form>
  );
};

DialogsForm = reduxForm({
  form: "DialogsForm",
  validate,
})(DialogsForm);

export default Dialogs;
