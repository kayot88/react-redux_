import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  setProfileToStore,
  getUserProfileById,
} from "./../../ac/profilePageAc";
import { isLoadingAC } from "./../../ac/usersPage";
import {withAuth} from "./../hoc/withAuth";

class ProfileContainer extends Component {
  componentDidMount() {
     this.props.getUserProfileById(this.props.match.params.userId);
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.getUserProfileById(this.props.match.params.userId);
    }
  }

  render() {
    // debugger
    return <Profile {...this.props} />;
  }
}
let RedirectComponent = withAuth(ProfileContainer);

const mstp = (state) => {
  console.log(state.profilePage.profile);
  return {
    profile: state.profilePage.profile,
    isLogin: state.auth.isLogin,
    isLoading: state.usersPage.isLoading,
  };
};

const ComponentWithRouter = withRouter(RedirectComponent);

export default connect(mstp, {
  setProfileToStore,
  isLoadingAC,
  getUserProfileById,
})(ComponentWithRouter);
