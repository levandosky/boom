import {combineReducers} from 'redux';

import UserReducer from './UserReducer';
import PlayersReducer from './PlayersReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    players: PlayersReducer
});

export default rootReducer;
