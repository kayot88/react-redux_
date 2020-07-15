import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserAuth } from "../../ac/profilePageAc";
import { logoutTC } from "../../ac/loginPageAC";

import { getUserAuth } from "../../ac/usersPage";

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
