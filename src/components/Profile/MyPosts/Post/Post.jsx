import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src={props.link} />
            <p>{props.message}</p>
            <div>
                <span>like {props.likeCount}</span>
            </div>
            <div>
                <span>dislike</span>
            </div>
        </div>
    );
}

export default Post;