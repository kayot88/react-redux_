import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getUserPhotoReselect } from "../../common/FileChangerFeature/selectors";
import {
  getStatusTC, getUserProfileById,
  setProfileToStore,
  setStatusTC
} from "./../../ac/profilePageAc";
import { isLoadingAC } from "./../../ac/usersPage";
import { fileChangerThunk } from './../../common/FileChangerFeature/ducks';
import { profileDataThunk } from "./ProfileDataFeature/ducks";

import {
  getLoadingReselect,
  getProfileReselect,
  getUserIDReselect, getUserStatusReselect
} from "./../../selectors/index";
import { withAuth } from "./../hoc/withAuth";
import Profile from "./Profile";

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
        isOwner={!this.props.match.params.userId}
        profileDataThunk={this.props.profileDataThunk}
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
    userPhoto: getUserPhotoReselect(state),
  };
};

export default compose(
  connect(mstp, {
    setProfileToStore,
    isLoadingAC,
    getUserProfileById,
    setStatusTC,
    getStatusTC,
    fileChangerThunk,
    profileDataThunk
  }),
  withRouter,
  withAuth
)(ProfileContainer);
