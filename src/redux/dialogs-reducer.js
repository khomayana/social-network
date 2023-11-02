const ADD_MESSAGE = 'ADD_MESSAGE';
const UPPDATE_NEW_MESSAGE_BODY = 'UPPDATE_NEW_MESSAGE_BODY';


const dialogsReducer = (state, action) => {

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