import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  setProfileToStore,
  getUserProfileById,
  setStatusTC,
  getStatusTC,
} from "./../../ac/profilePageAc";
import { isLoadingAC } from "./../../ac/usersPage";
import { withAuth } from "./../hoc/withAuth";
import { compose } from "redux";

class ProfileContainer extends Component {
  componentDidMount() {
    console.log(this.props.match.params.userId)
    this.props.getUserProfileById((this.props.match.params.userId || 8512));
    this.props.getStatusTC(this.props.match.params.userId);
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.getUserProfileById((this.props.match.params.userId));
    }

    // else if (prevProps.) {

    // }
  }

  render() {
    // console.log("ProfileCont_props", this.props);
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status}  setStatus={this.props.setStatusTC}/>
    );
  }
}

const mstp = (state) => {
  return {
    profile: state.profilePage.profile,
    isLoading: state.usersPage.isLoading,
    status: state.profilePage.userStatus,
  };
};

export default compose(
  connect(mstp, {
    setProfileToStore,
    isLoadingAC,
    getUserProfileById,
    setStatusTC,
    getStatusTC,
  }),
  withRouter,
  withAuth
)(ProfileContainer);
