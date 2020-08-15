import React, { ReactElement } from "react";
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import s from "./formValidate.module.css";
import { FormDataType } from "../../components/Login/Login";

export const validate = (values: any, props: any) => {
  const errors = {} as any; //👍
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

type renderFieldType = {
  input: ReactElement;
  meta: any;
  type: string;
  label: string;
};
export const renderField = (El: any) => ({
  input,
  meta,
  type,
  label,
}: renderFieldType) => {
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

type FormControlPropsType = {
  meta: WrappedFieldMetaProps;
  children: React.ReactNode;
};

// type FormControlType = (params: FormControlPropsType) => React.ReactNode;

const FormControl: React.FC<FormControlPropsType> = ({
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

type createFieldType = {
  placeholder: string;
  name: string;
  validators: {} | undefined;
  component: React.FC<WrappedFieldProps>;
  props: {};
  text: "";
};

export type availableNames = Extract<keyof FormDataType, string>;

export function createField<nameTypes extends string>(
  placeholder: string,
  name: nameTypes,
  validators: {} | undefined,
  component: React.FC<WrappedFieldProps>,
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

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
