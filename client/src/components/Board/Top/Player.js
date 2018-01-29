import React from "react";
import PlayerAvatar from "./PlayerAvatar";

const playerContainer = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: '5px',
    marginRight: '30px'
}

const nameContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'bottom',
    justifyContent: 'flex-end',
    textAlign: 'left',
    height: '90%',
    textTransform: 'uppercase',
    marginLeft: '10px',
    marginBottom: '8px',
    fontFamily: 'Oswald',
    fontSize: '4vh',
    lineHeight: '3vh',
    color: '#333'
}

const playerCardNumberStyles = {
    fontSize: '2vh',
    whiteSpace: 'nowrap'
}

class Player extends React.Component {
    render() {
        const {name, isActive} = this.props.player;

        return (
            <div style={playerContainer}>
                <PlayerAvatar isActive={isActive}/>
                <div style={nameContainer}>
                    <div className="player-name">
                        {name}
                    </div>
                    <div className="player-cards-number" style={playerCardNumberStyles}>
                        LICZBA KART: 6
                    </div>
                </div>
            </div>
        )
    }

}

export default Player;
