import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logoutTC } from "../../ac/loginPageAC";


class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    isLogin: state.auth.isLogin,
    isLoding: state.usersPage.isLoading,
    isInit: state.auth.isInitialized,
  };
};

const HeaderContainerWithConnect = connect(mapStateToProps, {
  logoutTC,
})(HeaderContainer);

export default HeaderContainerWithConnect;
