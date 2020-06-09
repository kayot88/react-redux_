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
} from "./../../../ac/usersPage";
import Users from "./UsersC";
import spinner from "../../../img/Cube-1s-200px.svg";

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
    console.log(this.props.isLoading);
    return this.props.isLoading ? (
      <img src={spinner} alt="spinner" />
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

const mapDispatchToProps = (dispatch) => {
  return {
    onFollowClick: (userId) => {
      dispatch(follow(userId));
    },
    onUnFollowClick: (userId) => {
      dispatch(unFollow(userId));
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
