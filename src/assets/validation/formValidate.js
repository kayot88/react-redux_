import React from "react";
import s from "./formValidate.module.css";
import { Field } from "redux-form";

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

export const renderField = (El) => ({ input, meta, type, label }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <div className={s.formControl + " " + (hasError ? s.err : "")}>
        <El {...input} type={type} placeholder={label} autoComplete="off" />
      </div>
      {(hasError && <span className={s.errSpan}>{meta.error}</span>) ||
        (hasError && <span>{meta.warning}</span>)}
    </div>
  );
};
export function createField(
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validators}
        component={component}
        {...props}
      />
      {text}
    </div>
  );
}
export const Textarea = (props) => {
  //const {input, meta, child, ...restProps} = props;
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
const FormControl = ({
  meta: { touched, error },
  children,
}) => {
  const hasError = touched && error;
  return (
    <div className={s.formControl + " " + (hasError ? s.err : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};
