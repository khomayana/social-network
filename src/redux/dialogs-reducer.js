const ADD_MESSAGE = 'ADD_MESSAGE';
const UPPDATE_NEW_MESSAGE_BODY = 'UPPDATE_NEW_MESSAGE_BODY';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    //state=state.dialogsMessage

    switch (action.type) {
        case UPPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case ADD_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messageData.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }
}

export const onChangeNewMessageCreater = (body) => {
    return {
        type: UPPDATE_NEW_MESSAGE_BODY,
        body: body
    }

}
export const sendNewMessageCreater = () => {
    return {
        type: ADD_MESSAGE
    }

}

export default dialogsReducer;