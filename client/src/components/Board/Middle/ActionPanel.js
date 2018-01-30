import React from 'react';
import {connect} from "react-redux";
import {serverPlayCard} from "../../../reducers/UserReducer";

class ActionPanel extends React.Component {

    render() {
        return (
            <div className="container-action-panel active">
                <div className="action-panel">
                    <div
                        className="action-panel-button play-card"
                        onClick={() => {
                            const cardId = Math.random();
                            console.log('play card ');
                            this.props.serverPlayCard(cardId);
                        }}
                    >
                        Zagraj kartę
                    </div>
                    <div className="action-panel-button  end-turn">
                        Zakończ turę
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    serverPlayCard
}

export default connect(null, mapDispatchToProps)(ActionPanel);