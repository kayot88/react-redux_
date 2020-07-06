// import React from "react";
import { addPostCreator } from "./../../../ac/index";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newText) => {
      dispatch(addPostCreator(newText));
    },
  };
};

const ConnectContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default ConnectContainer;
