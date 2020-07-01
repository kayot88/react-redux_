import { sendMessageCreator, updateMessageTextCreator_Process } from "../../ac";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuth } from "./../hoc/withAuth";
import { compose } from 'redux';


const mstp_redirect = (state) => {
  return {
    isLogin: state.auth.isLogin,
  };
};

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newValueMessage: state.dialogsPage.newMessageText,
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



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  connect(mstp_redirect),
  withAuth
)(Dialogs);

