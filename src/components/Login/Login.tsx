import React from "react";
import { Redirect } from "react-router-dom";
import { InjectedFormProps, reduxForm } from "redux-form";
import {
  availableNames,
  createField,
  Input,
  validate,
} from "../../assets/validation/formValidate";
import style from "./Login.module.css";

type loginPropsType = {
  isLogin: boolean;
  setLoginTC: (formData: availableNames) => void;
};

const Login = ({ isLogin, setLoginTC }: loginPropsType, { ...props }: any) => {
  let onSubmit = (formData: availableNames) => {
    debugger;
    setLoginTC(formData);
  };
  return !isLogin ? (
    <div>
      <div>Login</div>
      <LoginForm {...props} onSubmit={onSubmit} />
    </div>
  ) : (
    <Redirect to={"/profile"} />
  );
};

export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

type CaptchaType = {
  captcha: string;
};
type CaptchaRestoreType = {
  captchaRestore: undefined;
};
type LoginFormOwnProps = CaptchaRestoreType & CaptchaType;

let LoginsForm: React.FC<
  InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps
> = (props) => {
  const { handleSubmit, error, captcha, captchaRestore } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>{createField<availableNames>("Email", "email", error, Input)}</div>
      <div>
        {createField<availableNames>("Password", "password", error, Input)}
      </div>
      <div>
        {createField<availableNames>("remember me", "rememberMe", error, Input)}
      </div>
      <div>
        {props.captcha && (
          <div>
            <b>You have to go throw captcha verification</b>
            <img src={props.captcha} />{" "}
            {createField<availableNames>("", "captcha", error, Input)}
          </div>
        )}
      </div>
      <div>
        <button
          disabled={props.pristine || props.submitting}
          onClick={captchaRestore}
        >
          Login
        </button>
      </div>
      <span className={error ? style.formError : style.default}>
        {error && <strong>{error}</strong>}
      </span>
    </form>
  );
};
let LoginForm = reduxForm<FormDataType, LoginFormOwnProps>({
  form: "LoginForm",
  validate,
})(LoginsForm);

export default Login;
