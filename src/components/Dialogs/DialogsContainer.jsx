import {
  sendMessageCreator,
  updateMessageTextCreator_Process,
} from "../../ac";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newValueMessage: state.dialogsPage.newMessageText
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

const ConnectDialogs = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default ConnectDialogs;
