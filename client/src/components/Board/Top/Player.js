import React from "react";
import PlayerAvatar from "./PlayerAvatar";

const playerContainer = {
    display: 'flex',
    flexDirection: 'column',
    margin: '5px',
    width: '110px'
}

const nameContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '38px'
}

class Player extends React.Component {
    render() {
        const {name, isActive} = this.props.player;

        return (
            <div style={playerContainer}>
                <PlayerAvatar isActive={isActive}/>
                <div style={nameContainer}>
                    {name}
                </div>
            </div>
        )
    }

}

export default Player;
