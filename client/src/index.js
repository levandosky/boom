import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import RootReducer from './reducers/RootReducer'
import Root from "./Root";


const store = createStore(RootReducer);

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
