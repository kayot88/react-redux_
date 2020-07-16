import React from "react";
import { reduxForm, Field } from "redux-form";
import { renderField } from "../../assets/validation/formValidate";
import { validate } from "./../../assets/validation/formValidate";
import { Redirect } from "react-router-dom";
import Spinner from "./../Spinner/index";
import style from "./Login.module.css";

const Login = (props) => {
  
  const { isLoading } = props;

  let onSubmit = (formData) => {
    props.setLoginTC(formData);
  };
  return !props.isLogin ? (
    <div>
      <div>Login</div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  ) : isLoading ? (
    <Spinner />
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
        />
      </div>
      <div>
        <Field
          name={"password"}
          label={"Password"}
          type="password"
          autocomplete="new-password"
          component={renderField("input")}
        />
      </div>
      <div>
        <Field
          name={"rememberMe"}
          type={"checkbox"}
          label={"remember me"}
          component={renderField("input")}
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
