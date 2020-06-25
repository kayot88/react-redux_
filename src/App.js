import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainerWithConnect from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

function App(props) {
  return (
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
        <Route path="/login" render={() => <Login />} />
      </div>
    </div>
  );
}

export default App;
