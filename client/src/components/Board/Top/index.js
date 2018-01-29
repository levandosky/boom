import React from "react";
import Player from "./Player"
import {connect} from 'react-redux'
import Status from "./Status";

const topContainer = {
    display: 'flex',
    backgroundColor: '#ECECEC'
}

class Top extends React.Component {

    render() {
        const {players} = this.props
        return (
            <div style={topContainer}>
                {players.map(player => <Player player={player} key={player.name}/>)}
                <Status/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        players: [{name: 'PIK POK', isActive: true}, {name: 'MAD HAMMMSTER'}]
    }
}

export default connect(mapStateToProps)(Top);