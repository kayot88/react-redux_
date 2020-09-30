import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { AppStateType } from "../../redux/redux-store";

let mstp_redirect = (state: AppStateType) => {
  return {
    isLogin: state.auth.isLogin,
  };
};
export const withAuth = (WithRedirect: React.ComponentType) => {
  class RedirectComponent extends Component<PropsFromConnect> {
    render() {
      if (!this.props.isLogin) return <Redirect to="/login" />;
      return <WithRedirect {...this.props} />;
    }
  }
 
  const connecter = connect(mstp_redirect);
  type PropsFromConnect = ConnectedProps<typeof connecter>;

  let withAuthRedirect = connect(mstp_redirect)(RedirectComponent);
  return withAuthRedirect;
};
