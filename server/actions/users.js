import Game from '../game';

const SERVER_LOGIN = 'SERVER/LOGIN';
const SERVER_GET_CARD = 'SERVER/GET_CARD';
const SERVER_PLAY_CARD = 'SERVER/PLAY_CARD';


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
            payload: {
                deckSize: Game.getDeckSize()
            }
        });
    },
    [SERVER_GET_CARD]: (all, user, action) => {
        Game.getCard(user);
        const player = Game.getPlayer(user);

        if (Game.getMovesToDo() === 1) {
            player.isActive = false;
            Game.getNextPlayer(user.id).isActive = true;
        }

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
        all.emit('action', {
            type: 'SET_DECK_SIZE',
            payload: {
                deckSize: Game.getDeckSize()
            }
        });

    },
    [SERVER_PLAY_CARD]: (all, user, action) => {
        const playedCardArray = Game.playCard(user, action.payload);
        const player = Game.getPlayer(user);

        user.emit('action', {
            type: 'SET_USER',
            payload: Object.assign({
                logged: true
            }, player)
        });

        all.emit('action', {
            type: 'CARD_PLAYED',
            payload: {
                card: playedCardArray[0]
            }
        })
    }

}


export default usersActions;
