import React from "react";
import { reduxForm, Field } from "redux-form";
import { renderField } from "../../assets/validation/formValidate";
import { validate } from "./../../assets/validation/formValidate";
import { Redirect } from "react-router-dom";
import Profile from "./../Profile/Profile";
import Spinner from "./../Spinner/index";

const Login = (props) => {
  // console.log(props);
  const { isLoading } = props;

  let onSubmit = (formData) => {
    props.setLoginTC(formData);
  };
  if (!props.isLogin) {
    return (
      <div>
        <div>Login</div>
        <LoginForm onSubmit={onSubmit} />
      </div>
    );
  } else if (isLoading) {
    return <Spinner />;
  } else {
    return <Redirect to={"/profile"} />;
  }
};

let LoginForm = (props) => {
  const { handleSubmit } = props;
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
    </form>
  );
};

LoginForm = reduxForm({
  form: "loginForm",
  validate,
})(LoginForm);

export default Login;
