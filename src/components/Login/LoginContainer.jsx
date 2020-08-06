import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Login from "./Login";
import { setLoginTC } from "../../ac/loginPageAC";
import {
  isLoginReselect,
  isAuthReselect,
  isLoadingReselect,
  captchaReselect,
} from "../../selectors";
import { withRouter } from "react-router-dom";
import { captchaRestore } from './../../ac/loginPageAC';

class LoginContainer extends Component {
  componentDidMount() {}
  render() {
    return (
      <Login
        {...this.props}
        isLogin={this.props.isLogin}
        setLoginTC={this.props.setLoginTC}
      />
    );
  }
}

const mstp = (state) => {
  return {
    isLogin: isLoginReselect(state),
    isLoding: isLoadingReselect(state),
    isAuth: isAuthReselect(state),
    captcha: captchaReselect(state),
  };
};

export default compose(
  connect(mstp, { setLoginTC, captchaRestore }),
  withRouter
)(LoginContainer);
