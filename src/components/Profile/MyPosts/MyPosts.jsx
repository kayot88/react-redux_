import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
  const { addPost, posts } = props;
  let onSubmit = (formData) => {
    addPost(formData.newPostText);
  };

  let postsElements = posts.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} key={p.id} />;
  });

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <MyPostsForm onSubmit={onSubmit} />
      {postsElements}
    </div>
  );
};

let MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component="textarea"
          placeholder="enter text here"
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

MyPostsForm = reduxForm({
  form: "MyPostsForm",
})(MyPostsForm);

export default MyPosts;
