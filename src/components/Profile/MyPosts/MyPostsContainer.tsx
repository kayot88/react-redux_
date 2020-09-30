import { connect } from "react-redux";
import { actionsMessages } from "../../../ac/index";
import MyPosts from "./MyPosts";
import store, {
  AppStateType,
  InferActionTypes,
} from "../../../redux/redux-store";
import { compose, Dispatch } from "redux";

let mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    store: store.getState(),
  };
};

let mapDispatchToProps = (dispatch: DispatchTypes) => {
  return {
    addPost: (newText: string) => {
      dispatch(actionsMessages.addPostCreator(newText));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default compose<React.ComponentType>(connector)(MyPosts);

// types
export type PropsFromConnect = typeof connector;

type DispatchTypes = Dispatch<ActionsMessagesTypes>;

export type ActionsMessagesTypes = InferActionTypes<typeof actionsMessages>;
