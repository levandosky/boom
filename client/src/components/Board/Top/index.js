import React from "react";
import Player from "./Player"
import {connect} from 'react-redux'
import Status from "./Status";

const topContainer = {
    display: 'flex'
}

class Top extends React.Component {

    render() {
        const {players} = this.props
        return (
            <div style={topContainer}>
                {players ? players.map(player => <Player player={player} key={player.name}/>) : null}
                <Status/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        players: state.players.list
    }
}

export default connect(mapStateToProps)(Top);
