import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setUsers,
  setCurrentPage,
  setTotalCount,
  isLoadingAC,
  followInProgres,
  getUsers,
  onFollowClick,
  onUnFollowClick,
} from "../../ac/usersPage";
import Users from "./UsersC";
import Spinner from "../Spinner";
import { withAuth } from "./../hoc/withAuth";
import { compose } from "redux";

class UsersApiContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.countByPage);
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.getUsers(this.props.currentPage, this.props.countByPage);
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
      dispatch(onFollowClick(userId));
    },
    onUnFollowClick: (userId) => {
      dispatch(onUnFollowClick(userId));
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
      dispatch(isLoadingAC(loading));
    },
    isFollowingingAction: (following, userId) => {
      dispatch(followInProgres(following, userId));
    },
    getUsers: (currentPage, countByPage) => {
      dispatch(getUsers(currentPage, countByPage));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuth
)(UsersApiContainer);

