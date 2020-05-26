import React from 'react';
import ava from '../../../../img/ava.jpg'
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.item}>
                <img src={ ava } />
                { props.message }
                <div>
                    <span>like {props.likesCount }</span>
                </div>
            </div>
        </div>
    );
}

export default Post;