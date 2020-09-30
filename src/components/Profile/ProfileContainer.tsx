import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getUserPhotoReselect } from "../../common/FileChangerFeature/selectors";
import {
  getStatusTC,
  getUserProfileById,
  setStatusTC,
  ProfileActions,
} from "../../ac/profilePageAc";
import { UserPageActions } from "../../ac/usersPage";
import { fileChangerThunk } from "../../common/FileChangerFeature/ducks";
import { profileDataThunk } from "./ProfileDataFeature/ducks";

import {
  getLoadingReselect,
  getProfileReselect,
  getUserIDReselect,
  getUserStatusReselect,
} from "../../selectors/index";
import { withAuth } from "../hoc/withAuth";
import Profile from "./Profile";
import { withSuspense } from "../hoc/withSuspense";
import { AppStateType } from "../../redux/redux-store";
import { RouteProps } from "../../App";
import { ProfileType } from "../../types/types";

const { isLoadingAC } = UserPageActions;
const { setProfileToStore } = ProfileActions;

type OwnProps = {
  idUser?: number | undefined;
  currentPage: number;
  profile:ProfileType
  store: any
  // setStatus: () => void;
};

type AllTypes = FromConnectTypes & OwnProps & RouteProps;

type PrevPropsTypes = {
  currentPage: number | null;
  getUserProfileById: (userId: number) => void;
};

class ProfileContainer extends Component<AllTypes> {
  componentDidMount() {
    this.props.getUserProfileById(
      this.props.match.params.userId,
      this.props.idUser
    );

    this.props.getStatusTC(this.props.match.params.userId || this.props.idUser);
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.getUserProfileById(
        this.props.match.params.userId,
        this.props.idUser
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

const mstp = (state: AppStateType) => {
  return {
    profile: getProfileReselect(state),
    isLoading: getLoadingReselect(state),
    status: getUserStatusReselect(state),
    idUser: getUserIDReselect(state),
    userPhoto: getUserPhotoReselect(state),
  };
};

export type FromConnectTypes = ConnectedProps<typeof connector>;
const connector = connect(mstp, {
  setProfileToStore,
  isLoadingAC,
  getUserProfileById,
  setStatusTC,
  getStatusTC,
  fileChangerThunk,
  profileDataThunk,
});

export default compose<React.ComponentType>(
  connector,
  withRouter,
  withAuth,
  withSuspense
)(ProfileContainer);
