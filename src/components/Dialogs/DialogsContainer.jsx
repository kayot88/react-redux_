import { connect } from "react-redux";
import { compose } from 'redux';
import { newMessageThunk } from "../../ac/usersPage";
import { withAuth } from "./../hoc/withAuth";
import Dialogs from "./Dialogs";


const mstp_redirect = (state) => {
  return {
    isLogin: state.auth.isLogin,
  };
};

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, { newMessageThunk }),
  connect(mstp_redirect),
  withAuth
)(Dialogs);

