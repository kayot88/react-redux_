import React, { Component } from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserAuth } from "../../ac/profilePageAc";

class HeaderContainer extends Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        let { id, email, login } = res.data.data;
        this.props.setUserAuth(id, email, login);
      });
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
