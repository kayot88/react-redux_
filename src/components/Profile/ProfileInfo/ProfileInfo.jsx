import React from 'react';
import s from './ProfileInfo.module.css';
import snow from '../../../img/snow.jpg'
import owl from '../../../img/owl.jpg'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img} src={snow}/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.img} src={owl}/>
            </div>
        </div>
    );
}

export default ProfileInfo;