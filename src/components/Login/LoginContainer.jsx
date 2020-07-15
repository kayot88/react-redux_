import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Login from "./Login";
import { setLoginTC } from "../../ac/loginPageAC";
// import { withAuth } from "../hoc/withAuth";

class LoginContainer extends Component {
  componentDidMount() {
    // console.log(this.props.postLoginFormData);
  }
  render() {
    return (
      <Login {...this.props} isLogin={this.props.isLogin} setLoginTC={this.props.setLoginTC} />
    );
  }
}

const smtp = (state) => {
  return {
    isLogin: state.auth.isLogin,
    isLoding: state.usersPage.isLoading,
    isAuth: state.initApp.isInitialized,
  };
};

export default compose(connect(smtp, { setLoginTC }))(LoginContainer);
