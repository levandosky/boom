import React from "react";
import {connect} from 'react-redux'
import PlayerDeck from "./PlayerDeck";
import ActionPanel from "./ActionPanel";

const bottomContainer = {
    width: '100%',
    background: '#ECECEC'
}

class Bottom extends React.Component {

    render() {
        return (
            <div style={bottomContainer}>
                <PlayerDeck />
                <ActionPanel />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps)(Bottom);
