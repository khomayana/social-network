import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from "react";





const Profile = (props) => {
    return (
        <main className={style.content}>
            <ProfileInfo />
            <MyPostsContainer />
        </main>
    );
}

export default Profile;