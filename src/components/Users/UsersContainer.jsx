import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
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
import {
  usersSelector,
  totalCountSelector,
  countByPageSelector,
  currentPageSelector,
  isLoadingSelector,
  isFollowingSelector,
  usersReselect,
  totalCountReselect,
  countByPageReselect,
  currentPageReselect,
  isLoadingReselect,
  isFollowingReselect,
} from "../../selectors";

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
        isFollowingingAction={this.props.followInProgres}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: usersReselect(state),
    totalCount: totalCountReselect(state),
    countByPage: countByPageReselect(state),
    currentPage: currentPageReselect(state),
    isLoading: isLoadingReselect(state),
    isFollowing: isFollowingReselect(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    onFollowClick,
    onUnFollowClick,
    setUsers,
    setCurrentPage,
    setTotalCount,
    isLoadingAC,
    followInProgres,
    getUsers,
  }),
  withRouter,
  withAuth
)(UsersApiContainer);
