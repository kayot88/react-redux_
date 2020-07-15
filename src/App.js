import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainerWithConnect from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer.jsx";
import { connect } from "react-redux";
import { compose } from "redux";
import { initAPPTC } from "./ac/usersPage";
import Spinner from "./components/Spinner";

class App extends Component {
  componentDidMount() {
    this.props.initAPPTC();
  }
  render() {
    return this.props.isInit ? (
      <div className="app-wrapper">
        <HeaderContainerWithConnect />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
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
  };
};

export default compose(withRouter,connect(mstp, { initAPPTC }))(App);
