import React from "react";
import Player from "./Player"
import {connect} from 'react-redux'
import Status from "./Status";
import {serverLogin} from "../../../reducers/UserReducer";

const topContainer = {
    display: 'flex',
    height: '15vh',
    position: 'relative',
    backgroundColor: '#ECECEC'
}

class Top extends React.Component {
    componentDidMount(){
        if(!(this.props.user && this.props.user.logged)){
            const playerName = localStorage['playerName'];
            console.log('user '+playerName+' not logged');
            this.props.serverLogin(playerName);
        }

    }
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
        players: state.players.list,
        user: state.user
    }
}


const mapDispatchToProps = {
    serverLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Top);
