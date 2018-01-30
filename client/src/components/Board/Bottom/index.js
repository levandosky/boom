import React from "react";
import {connect} from 'react-redux'
import PlayerDeck from "./PlayerDeck";

const bottomContainer = {
    width: '100%',
    height: '35vh',
    background: '#ECECEC'
}

class Bottom extends React.Component {

    render() {
        return (
            <div style={bottomContainer}>
                <PlayerDeck />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps)(Bottom);
