import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import Profile from "./Profile";
import {
  setProfileToStore,
  getUserProfileById,
  setStatusTC,
  getStatusTC,
} from "./../../ac/profilePageAc";
import { isLoadingAC } from "./../../ac/usersPage";
import { withAuth } from "./../hoc/withAuth";
import { getProfile, getLoading, getUserStatus } from "./../../selectors/index";

class ProfileContainer extends Component {
  componentDidMount() {
    // console.log(this.props.match.params.userId);
    this.props.getUserProfileById(
      this.props.match.params.userId,
      this.props.profile.userId
    );
    this.props.getStatusTC(
      this.props.match.params.userId || this.props.profile.userId
    );
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.getUserProfileById(this.props.match.params.userId);
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        setStatus={this.props.setStatusTC}
      />
    );
  }
}

const mstp = (state) => {
  return {
    profile: getProfile(state),
    isLoading: getLoading(state),
    status: getUserStatus(state),
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
