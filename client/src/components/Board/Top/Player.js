import React from "react";
import playerAvatar from './playerAvatar.svg';

const playerContainer = {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    width: '110px'
}

const playerAvatarStyle = {
    height: '20px'
}

const nameContainer = {
    height: '2em',
    textAlign: 'center'
}

class Player extends React.Component {
    render() {
        const { name } = this.props.player;

        return (
            <div style={playerContainer}>
                <img src={playerAvatar} style={playerAvatarStyle} className="player-avatar" alt="player avatar" />
                <div style={nameContainer}>
                    {name}
                </div>
            </div>
        )
    }

}

export default Player;
