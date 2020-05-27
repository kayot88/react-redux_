import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const { addPost, updateNewPostText, posts, newPostText } = props;
  //   debugger;
  let postsElements = posts.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} key={p.id} />;
  });

  let newPostElement = React.createRef();

  //   debugger
  let onPostChange = () => {
    let text = newPostElement.current.value;
    //   debugger
    updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
