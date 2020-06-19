import React, { Component } from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  isLoading,
} from "../../ac/usersPage";
import Users from "./UsersC";
import Spinner from "../Spinner";

class UsersApiContainer extends Component {
  componentDidMount() {
    this.props.isLoadingAction(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countByPage}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalCount(res.data.totalCount);
        this.props.isLoadingAction(false);
      });
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.isLoadingAction(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countByPage}`
        )
        .then((res) => {
          this.props.setUsers(res.data.items);
          this.props.isLoadingAction(false);
        });
    }
  }

  render() {
    return this.props.isLoading ? (
      <Spinner />
    ) : (
      <Users
        totalCount={this.props.totalCount}
        countByPage={this.props.countByPage}
        currentPage={this.props.currentPage}
        setCurrentPage={this.props.setCurrentPage}
        onUnFollowClick={this.props.onUnFollowClick}
        onFollowClick={this.props.onFollowClick}
        users={this.props.users}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    countByPage: state.usersPage.countByPage,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
  };
};
// api follow/unfollow key : 27fbfa1d-3ee0-41a5-92e8-c87548fa77ec
const mapDispatchToProps = (dispatch) => {
  return {
    onFollowClick: (userId) => {
      axios({
        method: "post",
        url: `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        withCredentials: true,
        headers: { "API-KEY": "27fbfa1d-3ee0-41a5-92e8-c87548fa77ec" },
      }).then((res) => {
        debugger
        if (res.data.resultCode === 0) {
          dispatch(follow(userId));
        } else {
          alert(res.data.messages);
        }
      });
    },
    onUnFollowClick: (userId) => {
      axios({
        method: "delete",
        url: `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        withCredentials: true,
        headers: { "API-KEY": "27fbfa1d-3ee0-41a5-92e8-c87548fa77ec" },
      }).then((res) => {
        if (res.data.resultCode === 0) {
          dispatch(unFollow(userId));
        } else {
          alert(res.data.messages);
        }
      });
    },
    setUsers: (users) => {
      dispatch(setUsers(users));
    },
    setCurrentPage: (pageId) => {
      dispatch(setCurrentPage(pageId));
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCount(totalCount));
    },
    isLoadingAction: (loading) => {
      dispatch(isLoading(loading));
    },
  };
};
const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersApiContainer);

export default UsersContainer;
