import { connect, ConnectedProps } from "react-redux";
import { compose } from "redux";
import { newMessageThunk } from "../../ac/usersPage";
import { AppStateType } from "../../redux/redux-store";
import { withAuth } from "../hoc/withAuth";
import Dialogs from "./Dialogs";

const mstp_redirect = (state: AppStateType) => {
  return {
    isLogin: state.auth.isLogin,
  };
};

const mapStateToProps = (state: AppStateType) => {
return {
    dialogsPage: state.dialogsPage,
  };
};


// connector typing
const connector = connect(mapStateToProps, { newMessageThunk });
export type DialogsPropsFromREduxType = ConnectedProps<typeof connector>;

// compose typing
export default compose<React.ComponentType>(connector, connect(mstp_redirect), withAuth)(Dialogs);
