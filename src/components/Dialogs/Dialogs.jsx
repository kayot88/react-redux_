import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateMessageTextCreator, sendMessageCreator} from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    let state = props
        .store
        .getState()
        .dialogsPage;
    let dialogsElements = state
        .dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state
        .messages
        .map(m => <Message message={m.message} id={m.id}/>);
    let newMessageText = state.newMessageText;

    let onSendMessageClick = () => {
        props
            .store
            .dispatch(sendMessageCreator());
    }

    let onNewMessageText = (e) => {
        let text = e.target.value;
        props
            .store
            .dispatch(updateMessageTextCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea
                            onChange={onNewMessageText}
                            value={newMessageText}
                            placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
