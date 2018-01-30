import {createAction, handleActions} from 'redux-actions';


const ADD_CARD = 'ADD_CARD';
const CARD_PLAYED = 'CARD_PLAYED';
const SET_SELECTED_CARD_ID = 'SET_SELECTED_CARD_ID';

export const addCard = createAction(ADD_CARD);
export const setSelectedCardId = createAction(SET_SELECTED_CARD_ID );
export const cardPlayedAction = createAction(CARD_PLAYED);

const initialState = {
    usedCards: [
        {type: 'attack', id: 1, description: 'A zajebać Ci'},
        {type: 'shuffle', id: 11, description: 'A zajebać Ci'}
    ],
    selectedCardId: 1
}


export default handleActions({
    [ADD_CARD]: (state, action) => {
        console.log(action);
        const newArray = state.usedCards.slice();
        newArray.push(action.payload)
        return Object.assign({}, state, {usedCards: newArray});
    },
    [SET_SELECTED_CARD_ID]: (state, action) => {
        return Object.assign({}, state, {selectedCardId: action.payload})
    },
    [CARD_PLAYED]: (state, action) => {
        console.log(action);
        const newArray = state.usedCards.slice();
        newArray.push(action.payload.card)
        return Object.assign({}, state, {usedCards: newArray});
    }
}, initialState);
