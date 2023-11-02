import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { onChangeActionCreater, addPostActionCreater } from '../../../redux/profile-reducer';





const MyPosts = (props) => {

    let newPostElement = React.createRef();


    let addPost = () => {
        props.dispatch(addPostActionCreater());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = onChangeActionCreater(text)
        props.dispatch(action);

    }

    let postsElements = props.postData.map(item => < Post message={item.message} likeCount={item.likeCount} link={item.link} />)

    return (
        <div className={style.posts}>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <button onClick={addPost}>Add new post</button>
            </div >
            <div>
                <h3>My posts</h3>
                {postsElements}
            </div>
        </div >
    );
}

export default MyPosts;