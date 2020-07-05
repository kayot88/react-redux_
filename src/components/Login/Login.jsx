import React from "react";
import { reduxForm, Field } from "redux-form";

const Login = () => {
  let onSubmit = (formData) => {
    console.log(formData);
  };
  
  return (
    <div>
      <div>Login</div>
      <LoginForm onSubmit={onSubmit}/>
    </div>
  );
};

let LoginForm = (props) => {
  // console.log();
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name={"login"} placeholder={"Login"} component={"input"} />
      </div>
      <div>
        <Field name={"password"} placeholder={"Password"} component={"input"} />
      </div>
      <div>
        <Field
          name={"rememberMe"}
          type={"checkbox"}
          placeholder={"remember me"}
          component={"input"}
        />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

LoginForm = reduxForm({
  form: "loginForm",
})(LoginForm);

export default Login;
