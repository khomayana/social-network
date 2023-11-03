import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    }

    let postsElements = props.postData.map(item => < Post message={item.message} likeCount={item.likeCount} link={item.link} />)

    return (
        <div className={style.posts}>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <button onClick={onAddPost}>Add new post</button>
            </div >
            <div>
                <h3>My posts</h3>
                {postsElements}
            </div>
        </div >
    );
}

export default MyPosts;