import React from 'react';
import logo from '../../img/logo.svg';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={ s.header }>
            <img src={logo} className={ s.logo } alt="logo"/>
        </header>
    );
}

export default Header;
