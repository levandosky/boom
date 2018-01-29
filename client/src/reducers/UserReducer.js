import {createAction, handleActions} from 'redux-actions';

const SET_USER = 'SET_USER';
const SERVER_GET_USER = 'SERVER/GET_USER';

export const setUser = createAction(SET_USER);
export const serverGetUser = createAction(SERVER_GET_USER);


const initialState = {
    currentUser: 'test'
}


export default handleActions({
  [SET_USER]: (state, action) => {
    console.log(action);
    return Object.assign({}, state, action.payload);
  }
}, initialState);
