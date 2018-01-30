import uuid from 'uuid/v1';
import {findKey, mapValues, values, findIndex} from 'lodash';

import {cards} from './cards';

const gameObject = {
    players: {},
    deck: [],
    movesToDo: 1
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

    getMovesToDo() {
        return gameObject.movesToDo
    }

    createPlayerDeck() {
        const playerHand = [];
        for (let i = 0; i < 4; i++) {
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

    getPlayerBySessionId(user) {

    }

    addPlayer(newPlayer) {
        const playerId = findKey(gameObject.players, {name: newPlayer.name});
        const id = playerId || uuid();
        const isActive = Object.keys(gameObject.players).length === 0;

        if (playerId) {
            gameObject.players[id].sessionId = newPlayer.sessionId
        } else {
            gameObject.players[id] = {
                sessionId: newPlayer.sessionId,
                name: newPlayer.name,
                id: id,
                hand: this.createPlayerDeck(),
                isActive
            }
        }

        return gameObject.players[id];
    }

    getPlayers() {
        return values(mapValues(gameObject.players, (player) => {
            const {id, name, hand, isActive} = player
            return {id, name, numberOfCards: hand.length, isActive};
        }));
    }

    getPlayer(user) {
        const key = findKey(gameObject.players, {sessionId: user.id})
        return gameObject.players[key];
    }

    getNextPlayer(sessionId) {
        const key = findKey(gameObject.players, {sessionId})
        const keys = Object.keys(gameObject.players)
        let nextIndex = keys.sort().indexOf(key) + 1
        if (nextIndex >= keys.length ) {
            nextIndex = 0;
        }
        return gameObject.players[keys[nextIndex]];
    }

    getCard(user) {
        const player = this.getPlayer(user);
        const card = gameObject.deck.pop();
        player.hand.push(card);
    }

    playCard(user, cardId) {
        const player = this.getPlayer(user);
        const cardIndex = findIndex(player.hand, {id: cardId});
        return player.hand.splice(cardIndex, 1)
    }
}

const gameInstance = new Game();
export default gameInstance;
