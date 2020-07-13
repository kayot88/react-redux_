import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  validate,
  // warn,
  renderField,
} from "./../../../assets/validation/formValidate";

const MyPosts = (props) => {
  console.log("MyPosts", props);
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
  console.log("MyPostsForm", props);
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={renderField('input')}
          label="Enter status"
          type="text"
        />
      </div>
      <div>
        <button disabled={props.pristine || props.submitting} >Add post</button>
      </div>
    </form>
  );
};

MyPostsForm = reduxForm({
  form: "MyPostsForm",
  validate,
})(MyPostsForm);

export default MyPosts;
