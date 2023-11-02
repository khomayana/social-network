import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';


let store = {

    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Post 1', likeCount: 8, link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVtbaRWQXHXj6YZV0nyve6i9K8KCkXaRIqCQ&usqp=CAU" },
                { id: 2, message: 'Post 2', likeCount: 11, link: "https://cdn5.vectorstock.com/i/1000x1000/73/04/female-avatar-profile-icon-round-woman-face-vector-18307304.jpg" },
            ],
            newPostText: 'write something'
        },
        dialogsPage: {
            dialogData: [
                { id: 1, name: 'Misha', link: "https://previews.123rf.com/images/aerial3/aerial31503/aerial3150300041/37070303-vector-icon-of-user-avatar-for-web-site-or-mobile-app-man-face-in-flat-style-for-social-network.jpg" },
                { id: 2, name: 'Oleg', link: "https://img.freepik.com/premium-vector/vector-illustration-boy-avatar-avatar-social-network-documents-redheaded-boy-with-freckles_469123-398.jpg?w=2000" },
                { id: 3, name: 'Petro', link: "https://thumbs.dreamstime.com/z/portrait-redhead-man-avatar-social-network-caucasian-guy-colorful-young-businessman-vector-flat-illustration-198656678.jpg" },
                { id: 4, name: 'Mike', link: "https://media.istockphoto.com/id/1572227932/vector/abstract-avatar-icon-profile-diverse-empty-face-for-social-network-and-applications-vector.jpg?s=612x612&w=0&k=20&c=wKIM7FMbDuriWQV0PaYrVzOFaBhiyoNYQXCv9-wWoOk=" },
                { id: 5, name: 'Ann', link: "https://media.gettyimages.com/id/1227618788/vector/human-face-avatar-icon-profile-for-social-network-woman-vector-illustration.jpg?s=1024x1024&w=gi&k=20&c=aNRFcID0SejPgIIyJ-bSVvgoLBrJ7-He8ceIbyybhX8=" }
            ],
            newMessageBody: '',

            messageData: [
                { id: 1, message: 'How is life?' },
                { id: 2, message: 'How are things?' },
                { id: 3, message: 'How have you been?' },
                { id: 4, message: 'What is up?' },
                { id: 5, message: 'What have you been up to lately?' }
            ]
        },
        sidebar: {
            friendsData: [
                { id: 1, name: 'Taylor', link: "https://as2.ftcdn.net/v2/jpg/02/95/06/79/1000_F_295067932_x7oZygYQwtXwnPm1ft5aGf3iZltAGZB4.jpg" },
                { id: 2, name: 'Mira', link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsphtyprjy1ud4YyV_WRpr3nbuoaSy2My1yd2ffVRWWm1ZxvchMOc9o0PTWqGD9melDCc&usqp=CAU" },
                { id: 3, name: 'Tom', link: "https://media.istockphoto.com/id/1227618769/vector/human-face-avatar-icon-profile-for-social-network-man-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=pBMC1If8XkbJnBRYR9JLC9gsPdJDCq0bSZXDzm6zB2w=" }
            ]
        }
    },
    _callSubscriber() {
        console.log('work')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}



export default store;
