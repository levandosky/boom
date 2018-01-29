import Game from '../game';

const SERVER_LOGIN = 'SERVER/LOGIN';


const usersActions = {
  [SERVER_LOGIN] : (all, user, action) => {
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
  }
}


export default usersActions;
