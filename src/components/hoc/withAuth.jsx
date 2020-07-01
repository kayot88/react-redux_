import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mstp_redirect = (state) => {
  return {
    isLogin: state.auth.isLogin,
  };
};
export const withAuth = (WithRedirect) => {
  class RedirectComponent extends Component {
    render() {
      if (!this.props.isLogin) return <Redirect to="/login" />;
      return <WithRedirect {...this.props} />;
    }
  }
  let withAuthRedirect = connect(mstp_redirect)(RedirectComponent);
  return withAuthRedirect;
};
