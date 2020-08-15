import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { compose } from "redux";
import Login from "./Login";
import { setLoginTC } from "../../ac/loginPageAC";
import {
  isLoginReselect,
  isAuthReselect,
  isLoadingReselect,
  captchaReselect,
} from "../../selectors";
import { withRouter } from "react-router-dom";
import { captchaRestore } from "../../ac/loginPageAC";
import { AppStateType } from "../../redux/redux-store";

class LoginContainer extends Component<PropsFromReduxType> {
  componentDidMount() {}
  render() {
    return (
      <Login
        {...this.props}
        isLogin={this.props.isLogin}
        setLoginTC={this.props.setLoginTC}
      />
    );
  }
}

type mstpType = {
  isLogin: boolean;
  isLoding: boolean;
  isAuth: boolean | null;
  captcha: string | {} | null;
};

const mstp = (state: AppStateType): mstpType => {
  return {
    isLogin: isLoginReselect(state),
    isLoding: isLoadingReselect(state),
    isAuth: isAuthReselect(state),
    captcha: captchaReselect(state),
  };
};
//
type PropsFromReduxType = ConnectedProps<typeof connector>;
// type setLoginTCType = {
//   setLoginTC: () => void;
// };
const connector = connect(mstp, {
  setLoginTC,
  captchaRestore,
});

export default compose(connector, withRouter)(LoginContainer);
//
