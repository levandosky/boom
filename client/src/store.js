import { createStore, applyMiddleware, compose } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import thunk from 'redux-thunk';
import io from 'socket.io-client';

import RootReducer from './reducers/RootReducer'


let socket = io('http://localhost:3000');
let socketIoMiddleware = createSocketIoMiddleware(socket, 'SERVER/');
const middlewares = applyMiddleware(socketIoMiddleware, thunk);

//socket.emit('action', {type: 'server/dupa'});

const store = createStore(
  RootReducer,
  compose(
    middlewares,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
