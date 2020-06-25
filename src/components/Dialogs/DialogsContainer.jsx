import {
  sendMessageCreator,
  updateMessageTextCreator_Process,
} from "../../ac";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuth } from './../hoc/withAuth';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newValueMessage: state.dialogsPage.newMessageText,
    isLogin: state.auth.isLogin
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSendMessageClick: () => {
      dispatch(sendMessageCreator());
    },
    onNewMessageText: (text) => {
      dispatch(updateMessageTextCreator_Process(text));
    },
  };
};

let withAuthRedirect = withAuth(Dialogs)

const ConnectDialogs = connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthRedirect);

export default ConnectDialogs;
