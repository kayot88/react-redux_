import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import {
  createField,
  Input,
  validate,
} from "../../../assets/validation/formValidate";
import { PostType } from "../../../types/types";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PropsFromConnect } from "./MyPostsContainer";
import { GetFileNameToString } from "../../../common/generics/generics";

type MyPostsPropsType = {
  addPost: (newPostText: string) => void;
  posts: Array<PostType>;
};
type PropsTypes = MyPostsPropsType & PropsFromConnect;

const MyPosts: React.FC<PropsTypes> = (props: PropsTypes) => {
  const { addPost, posts } = props;
  let onSubmit = (formData: availableNames) => {
    addPost(formData);
  };

  let postsElements = posts.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} key={p.id} />;
  });

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <DecorMyPostsForm onSubmit={onSubmit} />
      {postsElements}
    </div>
  );
};

type MyPostsFormType = {
  newPostText: string;
};

type availableNames = GetFileNameToString<MyPostsFormType>;

let MyPostsForm: React.FC<InjectedFormProps> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<availableNames>(
          "enter your post text",
          "newPostText",
          props.error,
          Input
        )}
      </div>
      <div>
        <button disabled={props.pristine || props.submitting}>Add post</button>
      </div>
    </form>
  );
};

let DecorMyPostsForm = reduxForm({
  form: "MyPostsForm",
  validate,
})(MyPostsForm);

export default MyPosts;
 