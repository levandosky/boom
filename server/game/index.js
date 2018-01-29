import uuid from 'uuid/v1';
import {findKey, values} from 'lodash';

const gameObject = {
  players: {}
};


class Game {

  addPlayer(newPlayer) {

    console.log(gameObject.players);

    const player = findKey(gameObject.players, {name: newPlayer.name});

    console.log(player);

    if (player) {
      player.sessionId = newPlayer.sessionId
    } else {
      const id = uuid();
      gameObject.players[id] = {
        sessionId: newPlayer.sessionId,
        name: newPlayer.name,
        id: id
      }
    }
  }

  getPlayers() {
    return values(gameObject.players);
  }
}

const gameInstance = new Game();
export default gameInstance;
