import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import { setProfileToStore } from "./../../ac/profilePageAc";
import { isLoading } from "./../../ac/usersPage";

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.isLoading(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((res) => {
        this.props.setProfileToStore(res.data);
        this.props.isLoading(false);
      });
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.isLoading(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/profile/2`
        )
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
  console.log("mstp", state.profilePage.profile);
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mstp, { setProfileToStore, isLoading })(
  ProfileContainer
);
