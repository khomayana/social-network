import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from "react";





const Profile = (props) => {
    return (
        <main className={style.content}>
            <ProfileInfo />
            <MyPosts postData={props.profilePage.postData}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch} />
        </main>
    );
}

export default Profile;