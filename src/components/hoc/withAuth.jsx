import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export const withAuth = (WithRedirect) => {
  return class extends Component {
    render() {
      if (!this.props.isLogin) return <Redirect to="/login" />;
      return <WithRedirect {...this.props} />;
    }
  };
};
