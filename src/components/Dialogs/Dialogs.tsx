import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import {
  createField,
  Textarea,
  validate,
} from "../../assets/validation/formValidate";
import { initialStateType } from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

type DialogsPropsType = {
  dialogsPage: initialStateType;
  newMessageThunk: (dialogsFormText: string) => void;
};

const Dialogs: React.FC<DialogsPropsType> = (
  { dialogsPage, newMessageThunk }: DialogsPropsType,
  { ...props }: any
) => {
  let onSubmit = (formData: availableNames) => {
    // debugger
    newMessageThunk(formData);
  };

  let state = dialogsPage;
  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <DecorDialogsForm {...props} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

type DialogsFormType = {
  dialogsFormText: string;
};

type availableNames = Extract<keyof DialogsFormType, string>;
type PropsType = {};
let DialogsForm: React.FC<
  InjectedFormProps<DialogsFormType, PropsType> & PropsType
> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<availableNames>(
          "new message",
          "dialogsFormText",
          props.error,
          Textarea
        )}
      </div>
      <div>
        <button disabled={props.pristine || props.submitting}>Send</button>
      </div>
    </form>
  );
};

const DecorDialogsForm = reduxForm({
  form: "DialogsForm",
  validate,
})(DialogsForm);

export default Dialogs;
