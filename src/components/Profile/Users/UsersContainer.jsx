// import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
} from "./../../../ac/usersPage";
import Users from "./UsersC";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    countByPage: state.usersPage.countByPage,
    currentPage: state.usersPage.currentPage,
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
  };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
