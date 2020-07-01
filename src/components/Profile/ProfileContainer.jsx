import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  setProfileToStore,
  getUserProfileById,
} from "./../../ac/profilePageAc";
import { isLoadingAC } from "./../../ac/usersPage";
import { withAuth } from "./../hoc/withAuth";
import { compose } from "redux";

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getUserProfileById((this.props.match.params.userId = 2));
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.getUserProfileById((this.props.match.params.userId = 2));
    }
  }

  render() {
    console.log("ProfileCont_props", this.props);
    return <Profile {...this.props} />;
  }
}

const mstp = (state) => {
  return {
    profile: state.profilePage.profile,
    isLoading: state.usersPage.isLoading,
  };
};

export default compose(
  connect(mstp, {
    setProfileToStore,
    isLoadingAC,
    getUserProfileById,
  }),
  withRouter,
  withAuth
)(ProfileContainer);
