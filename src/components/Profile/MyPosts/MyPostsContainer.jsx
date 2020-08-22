import { connect } from "react-redux";
import { actionsMessages } from "../../../ac/index";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newText) => {
      dispatch(actionsMessages.addPostCreator(newText));
    }
  };
};

const ConnectContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default ConnectContainer;
