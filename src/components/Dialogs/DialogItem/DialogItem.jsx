import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
      <div>
        <NavLink activeClassName={s.activeLink} to={path}>
          {props.name}
        </NavLink>
      </div>
    );
}

export default DialogItem;
