import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  setProfileToStore,
  getUserProfileById_tc,
} from "./../../ac/profilePageAc";
import { isLoading } from "./../../ac/usersPage";

class ProfileContainer extends Component {
  componentDidMount() {
    getUserProfileById_tc(this.props.match.params.userId);
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      getUserProfileById_tc(this.props.match.params.userId);
    }
  }

  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

const ComponentWithRouter = withRouter(ProfileContainer);

export default connect(mstp, { setProfileToStore, isLoading })(
  ComponentWithRouter
);
