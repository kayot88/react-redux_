import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { Route, withRouter, BrowserRouter } from "react-router-dom";
import { compose } from "redux";
import { initAPPTC } from "./ac/usersPage";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainerWithConnect from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Spinner from "./common/Spinner";
import store from "./redux/redux-store";

class App extends Component {
  handlerPromiseError = (promiseRejectionEvent) => {
    debugger
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
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer title={"Title"} />} />
          <Route path="/login" render={() => <LoginContainer />} />
        </div>
      </div>
    ) : (
      <Spinner />
    );
  }
}

const mstp = (state) => {
  return {
    isInit: state.initApp.isInitialized,
    id: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
  };
};

let AppContainer = compose(withRouter, connect(mstp, { initAPPTC }))(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
