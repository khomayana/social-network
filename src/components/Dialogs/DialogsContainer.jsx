import { onChangeNewMessageCreater, sendNewMessageCreater } from '../../redux/dialogs-reducer'
import React, { useContext } from 'react';
import Dialogs from './Dialogs';
import StoreContext from '../../storeContext';

const DialogsContainer = () => {
    const store = useContext(StoreContext);
    let state = store.getState();
    let newMessageChange = (body) => {
        store.dispatch(onChangeNewMessageCreater(body));
    }
    let sendMessage = () => {
        store.dispatch(sendNewMessageCreater());
    }
    return (
        <Dialogs sendMessage={sendMessage} newMessageChange={newMessageChange} dialogsPage={state.dialogsPage} />

    )
}

export default DialogsContainer;

