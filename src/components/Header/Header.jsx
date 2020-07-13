import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.svg";
import s from "./Header.module.css";

const Header = ({ isLogin, userId, logoutTC }) => {
  const onClickHandler = () => {
    console.log('logout');
    logoutTC();
  };

  return (
    <header className={s.header}>
      <img src={logo} className={s.logo} alt="logo" />

      <div className={s.blockLogin}>
        {isLogin ? (
          <button onClick={() => onClickHandler()}>Logout</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
