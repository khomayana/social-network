import { useContext } from 'react';
import React from 'react';
import { onChangeActionCreater, addPostActionCreater } from '../../../redux/profile-reducer';
import StoreContext from '../../../storeContext';
import MyPosts from './MyPosts';


const MyPostsContainer = () => {
    const store = useContext(StoreContext);
    let state = store.getState();
    let addPost = () => {
        store.dispatch(addPostActionCreater());
    }

    let onPostChange = (text) => {
        let action = onChangeActionCreater(text);
        store.dispatch(action);
    }

    return (
        <MyPosts
            onPostChange={onPostChange}
            addPost={addPost}
            postData={state.profilePage.postData}
            newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;