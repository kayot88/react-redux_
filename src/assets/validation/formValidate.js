import React from "react";
import s from "./formValidate.module.css";

export const validate = (values, props) => {
  const errors = {};
  if (!values.dialogsFormText) {
    errors.dialogsFormText = "Required";
  } else if (values.dialogsFormText.length < 5) {
    errors.dialogsFormText = "Status must be 5 symbols or more";
  }
  if (!values.newPostText) {
    errors.newPostText = "Required";
  } else if (values.newPostText.length < 10) {
    errors.newPostText = "Status must be 10 symbols or more";
  }
  if (!values.login) {
    errors.login = "Required";
  } else if (values.login.length < 5) {
    errors.login = "Status must be 5 symbols or more";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Status must be 8 symbols or more";
  }
  return errors;
};

export const renderField = (El) => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <div className={s.formControl + " " + (hasError ? s.err : "")}>
        <El
          {...input}
          type={props.type}
          placeholder={props.label}
          autoComplete="off"
        />
      </div>
      {(hasError && <span className={s.errSpan}>{meta.error}</span>) ||
        (hasError && <span>{meta.warning}</span>)}
    </div>
  );
};
