import { UPDATE_NEW_MESSAGE_TEXT, SEND_MESSAGE } from './../constants/index';


let initialState = {
    messages: [
        {
            id: 1,
            message: 'Hi!'
        }, {
            id: 2,
            message: 'How are you?'
        }, {
            id: 3,
            message: 'Yo'
        }
    ],
    dialogs: [
        {
            id: 1,
            name: 'Igor'
        }, {
            id: 2,
            name: 'Dima'
        }, {
            id: 3,
            name: 'Sergei'
        }
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.payload;
            break;
        case SEND_MESSAGE:
            let text = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({ id: 4, message: text });
            break;
        default: break;
    }
    return state;
}

// export const updateMessageTextCreator = (text) => {
//     return {
//         type: UPDATE_NEW_MESSAGE_TEXT,
//         payload: text
//     }
// }

// export const sendMessageCreator = () => {
//     return {
//         type: SEND_MESSAGE
//     }
// }

export default dialogsReducer;
