import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserAuth } from "../../ac/profilePageAc";
import { logoutTC } from "../../ac/loginPageAC";

import { getUserAuth } from "../../ac/usersPage";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getUserAuth();
  }
  componentDidUpdate(prevProps) {
    //  this.props.getUserAuth();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    isLogin: state.auth.isLogin,
    isLoding: state.usersPage.isLoading
  };
};

const HeaderContainerWithConnect = connect(mapStateToProps, {
  setUserAuth,
  getUserAuth,
  logoutTC,
})(HeaderContainer);

export default HeaderContainerWithConnect;
