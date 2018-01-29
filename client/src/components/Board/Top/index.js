import React from "react";
import Player from "./Player"
import { connect } from 'react-redux'

const topContainer = {
    display: 'flex'
}

class Top extends React.Component {

    render() {
        const { players } = this.props
        return (
            <div style={topContainer}>
                {players.map(player => <Player player={player} key={player.name}/>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        players: [{ name: 'PIK POK' }, { name: 'MAD HAMMMSTER' }]
    }
}

export default connect(mapStateToProps)(Top);