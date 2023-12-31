import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/Message';
import { onChangeNewMessageCreater, sendNewMessageCreater } from '../../redux/dialogs-reducer'
import React from 'react';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogData.map(item => < DialogItem name={item.name} id={item.id} link={item.link} />);
    let messagesElements = props.dialogsPage.messageData.map(item => <MessageItem message={item.message} />);
    let newMessageBody = props.dialogsPage.newMessageBody;

    let newMessageChange = (event) => {
        let body = event.target.value;
        props.newMessageChange(body);
    }

    let onSendMessage = () => {
        props.sendMessage();
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsCatalog}>
                {dialogsElements}
            </div>
            <div className={style.messageCatalog}>
                <div>{messagesElements}</div>
                <div> <textarea placeholder='Enter your message' onChange={newMessageChange} value={newMessageBody} /> </div>
                <div> <button onClick={onSendMessage}>Send message</button></div>
            </div>
        </div >
    )
}

export default Dialogs;