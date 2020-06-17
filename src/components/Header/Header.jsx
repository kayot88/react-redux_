import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.svg';
import s from './Header.module.css';

const Header = ({ isLogin, userId }) => {
  return (
    <header className={s.header}>
      <img src={logo} className={s.logo} alt="logo" />
      <div className={s.blockLogin}>
        {isLogin ? userId : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
