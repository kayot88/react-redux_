import React, { Component } from "react";
import { connect } from "react-redux";
import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  isLoading,
  followInProgres,
} from "../../ac/usersPage";
import Users from "./UsersC";
import Spinner from "../Spinner";
import { usersApi } from "./../../api/usersApi";

class UsersApiContainer extends Component {
  componentDidMount() {
    this.props.isLoadingAction(true);
    usersApi
      .getUsers(this.props.currentPage, this.props.countByPage)
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalCount(res.data.totalCount);
        this.props.isLoadingAction(false);
      });
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.isLoadingAction(true);
      usersApi
        .getUsers(this.props.currentPage, this.props.countByPage)
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
        isFollowProgres={this.props.isFollowing}
        isFollowingingAction={this.props.isFollowingingAction}
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
    isFollowing: state.usersPage.followInProgres,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFollowClick: (userId) => {
      usersApi.followApi(userId).then((res) => {
        if (res.data.resultCode === 0) {
          dispatch(follow(userId));
        }
        dispatch(followInProgres(false, userId));
      });
    },
    onUnFollowClick: (userId) => {
      usersApi.unFollowApi(userId).then((res) => {
        if (res.data.resultCode === 0) {
          dispatch(unFollow(userId));
        }
        dispatch(followInProgres(false, userId));
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
    isFollowingingAction: (following, userId) => {
      dispatch(followInProgres(following, userId));
    },
  };
};
const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersApiContainer);

export default UsersContainer;
