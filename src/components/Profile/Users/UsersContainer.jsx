import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import { follow, unFollow, setUsers } from "./../../../ac/usersPage";

const mapStateToProps = (state) => {
  console.log("  debugger: ", state);
  return {
    users: state.usersPage.users,
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
  };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
