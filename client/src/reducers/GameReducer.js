import {createAction, handleActions} from 'redux-actions';


const ADD_CARD = 'ADD_CARD';

export const addCard = createAction(ADD_CARD);

const initialState = {
    usedCards: [
        {type: 'attack', id: 1, description: 'A zajebać Ci'},
        {type: 'shuffle', id: 11, description: 'A zajebać Ci'}
    ]
}


export default handleActions({
    [ADD_CARD]: (state, action) => {
        console.log(action);
        const newArray = state.usedCards.slice();
        newArray.push(action.payload)
        return Object.assign({}, state, {usedCards: newArray});
    }
}, initialState);
