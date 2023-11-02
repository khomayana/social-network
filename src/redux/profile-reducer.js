const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEWPOST-TEXT';

let initialState = {
    postData: [
        { id: 1, message: 'Post 1', likeCount: 8, link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVtbaRWQXHXj6YZV0nyve6i9K8KCkXaRIqCQ&usqp=CAU" },
        { id: 2, message: 'Post 2', likeCount: 11, link: "https://cdn5.vectorstock.com/i/1000x1000/73/04/female-avatar-profile-icon-round-woman-face-vector-18307304.jpg" },
    ],
    newPostText: 'write something'
}

const profileReducer = (state = initialState, action) => {

    //state = state.profilePage
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 0,
                link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVtbaRWQXHXj6YZV0nyve6i9K8KCkXaRIqCQ&usqp=CAU"
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const onChangeActionCreater = (text) => {
    return {
        type: UPDATE_NEW_POST,
        newText: text
    }
}
export const addPostActionCreater = () => {
    return {
        type: ADD_POST
    }
}

export default profileReducer