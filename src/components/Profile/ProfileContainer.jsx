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
  getUserIDReselect,
} from "./../../selectors/index";

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getUserProfileById(
      this.props.match.params.userId,
      this.props.idUser
    );

    this.props.getStatusTC(this.props.match.params.userId || this.props.idUser);
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.getUserProfileById(
        this.props.match.params.userId || this.props.idUser
      );
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
    profile: getProfileReselect(state),
    isLoading: getLoadingReselect(state),
    status: getUserStatusReselect(state),
    idUser: getUserIDReselect(state),
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
