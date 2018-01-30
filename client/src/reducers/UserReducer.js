import {createAction, handleActions} from 'redux-actions';

const SET_USER = 'SET_USER';
const SERVER_LOGIN = 'SERVER/LOGIN';
const SERVER_GET_CARD = 'SERVER/GET_CARD';
const SERVER_PLAY_CARD = 'SERVER/PLAY_CARD';

export const setUser = createAction(SET_USER);
export const serverLogin = createAction(SERVER_LOGIN);
export const serverGetCard = createAction(SERVER_GET_CARD);
export const serverPlayCard = createAction(SERVER_PLAY_CARD);


const initialState = {}


export default handleActions({
  [SET_USER]: (state, action) => {
    console.log(action);
    return Object.assign({}, state, action.payload);
  }
}, initialState);
