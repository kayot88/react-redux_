import React from "react";
import { addPostCreator, updateNewPostTextCreator } from "./../../../ac/index";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({store}) => {

  let addPost = () => {
    store.dispatch(addPostCreator());
  };

  let updateNewPostText = (text) => {
    let action = updateNewPostTextCreator(text);
    store.dispatch(action);
  };

  return (
    <MyPosts
      posts={store.getState().profilePage.posts}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
      newPostText={store.getState().profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
