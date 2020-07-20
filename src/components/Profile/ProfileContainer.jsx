import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import Profile from "./Profile";
import {
  getUserProfileById,
  setProfileToStore,
  setStatusTC,
  getStatusTC,
} from "./../../ac/profilePageAc";
import { isLoadingAC } from "./../../ac/usersPage";
import { withAuth } from "./../hoc/withAuth";
import {
  getUserStatusReselect,
  getLoadingReselect,
  getProfileReselect,
} from "./../../selectors/index";

class ProfileContainer extends Component {
  componentDidMount() {
    console.log(this.props);
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
      this.props.getUserProfileById(
        this.props.match.params.userId || this.props.profile.userId
      );
    }
  }

  render() {
    console.log("render");
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
  console.log("mstp");
  return {
    // profile: getProfileReselect(state),
    profile: state.profilePage.profile,

    isLoading: getLoadingReselect(state),
    // status: getUserStatusReselect(state),
    status: state.profilePage.userStatus,
    idUser: state.auth.id
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
