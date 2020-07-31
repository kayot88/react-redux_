import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { renderField } from "../../assets/validation/formValidate";
import { validate } from "./../../assets/validation/formValidate";
import style from "./Login.module.css";

const Login = (props) => {
  let onSubmit = (formData) => {
    props.setLoginTC(formData);
  };
  return !props.isLogin ? (
    <div>
      <div>Login</div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  ) : (
    <Redirect to={"/profile"} />
  );
};

let LoginForm = (props) => {
  const { handleSubmit, error } = props;
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
        <button disabled={props.pristine || props.submitting}>Login</button>
      </div>
      <span className={error ? style.formError : style.default}>
        {error && <strong>{error}</strong>}
      </span>
    </form>
  );
};

LoginForm = reduxForm({
  form: "loginForm",
  validate,
})(LoginForm);

export default Login;
