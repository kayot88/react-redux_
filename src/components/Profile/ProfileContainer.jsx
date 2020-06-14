import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import { setProfileToStore } from "./../../ac/profilePageAc";
import { isLoading } from "./../../ac/usersPage";
import { withRouter } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.isLoading(true);
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((res) => {
        this.props.setProfileToStore(res.data);
        this.props.isLoading(false);
      });
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.isLoading(true);
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then((res) => {
          this.props.setProfileToStore(res.data);
          this.props.isLoading(false);
        });
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
