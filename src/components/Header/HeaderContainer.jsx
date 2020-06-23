import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserAuth } from "../../ac/profilePageAc";
import { getUserAuth } from "../../ac/usersPage";

class HeaderContainer extends Component {
  componentDidMount() {
    getUserAuth()
  }
  componentDidUpdate(prevProps) {}

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    isLogin: state.auth.isLogin,
  };
};

const HeaderContainerWithConnect = connect(mapStateToProps, { setUserAuth })(
  HeaderContainer
);

export default HeaderContainerWithConnect;
