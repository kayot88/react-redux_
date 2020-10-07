import React, { Component } from "react";
import { connect, Provider, ConnectedProps } from "react-redux";
import {
  BrowserRouter,
  Route,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import { compose } from "redux";
import { initAPPTC } from "./ac/usersPage";
import "./App.css";
import Spinner from "./common/Spinner";
import HeaderContainerWithConnect from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import store, { AppStateType } from "./redux/redux-store";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { withSuspense } from "./components/hoc/withSuspense";

const SuspendedDialogsContainer = withSuspense(DialogsContainer);
const SuspendedProfileContainer = withSuspense(ProfileContainer);

class App extends Component<MainAppPropsType & RouteProps> {
  handlerPromiseError = (promiseRejectionEvent: PromiseRejectionEvent) => {
    alert(promiseRejectionEvent);
  };
  componentDidMount() {
    this.props.initAPPTC();
    window.addEventListener("unhandledrejection", this.handlerPromiseError);
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.handlerPromiseError);
  }

  render() {
    return this.props.isInit ? (
      <div className="app-wrapper">
        <HeaderContainerWithConnect />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/profile/:userId?"
            render={() => <SuspendedProfileContainer />}
          />
          <Route path="/dialogs" render={() => <SuspendedDialogsContainer />} />
          <Route
            path="/users"
            render={() => <UsersContainer title={"Title"} />}
          />
          <Route path="/login" render={() => <LoginContainer />} />
        </div>
      </div>
    ) : (
      <Spinner />
    );
  }
}

type MatchParams = {
  userId: any;
};

export interface RouteProps extends RouteComponentProps<MatchParams> {}

const mstp = (state: AppStateType) => {
  return {
    isInit: state.initApp.isInitialized,
    id: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
  };
};
const connector = connect(mstp, { initAPPTC });
type MainAppPropsType = ConnectedProps<typeof connector>;

let AppContainer = compose<React.ComponentType>(connector, withRouter)(App);

const MainApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;

// type MapPropsType = ReturnType<typeof mstp>;

type DispatchPropsType = {
  initAPPTC: () => void;
};
