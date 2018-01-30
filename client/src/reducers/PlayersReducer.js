import {createAction, handleActions} from 'redux-actions';

const SET_PLAYERS_LIST = 'SET_PLAYERS_LIST';

export const setPlayersList = createAction(SET_PLAYERS_LIST);


const initialState = {
    list: []
}


export default handleActions({
    [SET_PLAYERS_LIST]: (state, action) => {
        console.log(action);
        return Object.assign({}, state, action.payload);
    }
}, initialState);
