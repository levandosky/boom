import uuid from 'uuid/v1';
import {findKey, mapValues, values} from 'lodash';

import {cards} from './cards';

const gameObject = {
  players: {},
  deck: []
};


class Game {
  constructor() {
    this.reloadDeck();
  }

  reloadDeck() {
    gameObject.deck = cards;

  }

  getDeckSize() {
    return gameObject.deck.length;
  }

  createPlayerDeck() {
    const playerHand = [];
    for(let i = 0; i < 4; i++) {
      let cardIndex = Math.floor(Math.random() * this.getDeckSize());

      let card = gameObject.deck[cardIndex];

      if (card.Rodzaj === 'Eksplodujący kotek') {
        card = gameObject.deck[Math.floor(Math.random() * this.getDeckSize())];
      }

      playerHand.push(Object.assign({}, card));
      gameObject.deck.splice(cardIndex, 1);
    }

    playerHand.push({
        "category": "Rozbrój",
        "type": "disarm",
        "description": "Kocią jogą ",
        "action": "Umieść ostatnio wyciągniętą kartę z powrotem w talii",
        "joke": " ",
        "id": "51"
    });

    return playerHand;
  };


  addPlayer(newPlayer) {
    const playerId = findKey(gameObject.players, {name: newPlayer.name});
    const id = playerId || uuid();

    if (playerId) {
      gameObject.players[id].sessionId = newPlayer.sessionId
    } else {
      gameObject.players[id] = {
        sessionId: newPlayer.sessionId,
        name: newPlayer.name,
        id: id,
        hand: this.createPlayerDeck()
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
