import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Route, withRouter, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainerWithConnect from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer.jsx";
import { initAPPTC } from "./ac/usersPage";
import Spinner from "./components/Spinner";

class App extends Component {
  componentDidMount() {
    const { id, email, login } = this.props;
    this.props.initAPPTC();
  }

  render() {
    <BrowserRouter>
      <Provider store={store}>
        return this.props.isInit ? (
        <div className="app-wrapper">
          <HeaderContainerWithConnect />
          <Navbar />
          <div className="app-wrapper-content">
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <LoginContainer />} />
          </div>
        </div>
        ) : (
        <Spinner />
        );
      </Provider>
      
    </BrowserRouter>;
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

export default compose(withRouter, connect(mstp, { initAPPTC }))(App);
