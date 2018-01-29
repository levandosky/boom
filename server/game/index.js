import uuid from 'uuid/v1';
import {findKey, mapValues, values} from 'lodash';

const gameObject = {
  players: {}
};


class Game {

  addPlayer(newPlayer) {
    const playerId = findKey(gameObject.players, {name: newPlayer.name});
    const id = playerId || uuid();

    if (playerId) {
      gameObject.players[id].sessionId = newPlayer.sessionId
    } else {
      gameObject.players[id] = {
        sessionId: newPlayer.sessionId,
        name: newPlayer.name,
        id: id
      }
    }

    return gameObject.players[id];
  }

  getPlayers() {
    return values(mapValues(gameObject.players, (player) => {
      const {id, name} = player
      return {id, name};
    }));
  }
}

const gameInstance = new Game();
export default gameInstance;
