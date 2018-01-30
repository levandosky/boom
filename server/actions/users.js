import Game from '../game';

const SERVER_LOGIN = 'SERVER/LOGIN';
const SERVER_GET_CARD = 'SERVER/GET_CARD';


const usersActions = {
    [SERVER_LOGIN]: (all, user, action) => {
        const newUser = Game.addPlayer({sessionId: user.id, name: action.payload});

        user.emit('action', {
            type: 'SET_USER',
            payload: Object.assign({
                logged: true
            }, newUser)
        });

        all.emit('action', {
            type: 'SET_PLAYERS_LIST',
            payload: {
                list: Game.getPlayers()
            }
        });

        all.emit('action', {
            type: 'SET_DECK_SIZE',
            payload: Game.getDeckSize()
        })
    },
    [SERVER_GET_CARD]: (all, user, action) => {
        Game.getCard(user);
        const player = Game.getPlayer(user);

        user.emit('action', {
            type: 'SET_USER',
            payload: Object.assign({
                logged: true
            }, player)
        });

        all.emit('action', {
            type: 'SET_PLAYERS_LIST',
            payload: {
                list: Game.getPlayers()
            }
        });

    }

}


export default usersActions;
