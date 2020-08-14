import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import {
  renderField,
  Input,
  createField,
} from "../../assets/validation/formValidate";
import { validate } from "../../assets/validation/formValidate";
import style from "./Login.module.css";

type loginPropsType = {
  isLogin: boolean;
  setLoginTC: (formData: FormDataType) => void;
};

const Login = ({ isLogin, setLoginTC }: loginPropsType, { ...props }: any) => {
  debugger;
  let onSubmit = (formData: FormDataType) => {
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

type FormDataType = {
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
      <div>
        <Field
          name={"email"}
          type="email"
          label={"Email"}
          component={renderField("input")}
          autocomplete="off"
        />
      </div>
      <div>
        <Field
          name={"password"}
          label={"Password"}
          type="password"
          autocomplete="off"
          component={renderField("input")}
        />
      </div>
      <div>
        <Field
          name={"rememberMe"}
          type={"checkbox"}
          label={"remember me"}
          component={renderField("input")}
          autocomplete="off"
        />
      </div>
      <div>
        {props.captcha && (
          <div>
            <b>You have to go throw captcha verification</b>
            <img src={props.captcha} /> {createField("", "captcha", [], Input)}
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
  form: "loginForm",
  validate,
})(LoginsForm);

export default Login;
