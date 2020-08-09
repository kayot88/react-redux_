import { connect, ConnectedProps } from "react-redux";
import { compose } from "redux";
import { newMessageThunk } from "../../ac/usersPage";
import { withAuth } from "../hoc/withAuth";
import Dialogs from "./Dialogs";
import { AppStateType } from "../../redux/redux-store";
import { MessageType, DialogType } from "../../types/types";

const mstp_redirect = (state: AppStateType) => {
  return {
    isLogin: state.auth.isLogin,
  };
};
type mapStateToPropsType = {
  dialogsPage: {
    messages: Array<MessageType>;
    dialogs: Array<DialogType>;
    newMessageText: string | null;
  };
};

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
const connector = connect(mapStateToProps, { newMessageThunk });
export type DialogsPropsFromREduxType = ConnectedProps<typeof connector>;

export default compose(
  connector,
  // connect(mapStateToProps, { newMessageThunk }),
  connect(mstp_redirect),
  withAuth
)(Dialogs);
