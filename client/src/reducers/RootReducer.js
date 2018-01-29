import {combineReducers} from 'redux';

import UserReducer from './UserReducer';
import GameReducer from './GameReducer';

import PlayersReducer from './PlayersReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    game: GameReducer,
    players: PlayersReducer
})
export default rootReducer;
