const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEWPOST-TEXT';


const profileReducer = (state, action) => {

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