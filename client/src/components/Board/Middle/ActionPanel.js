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
                            const cardId = this.props.selectedCardId;
                            console.log('play card ' + cardId);
                            this.props.serverPlayCard(cardId);
                        }}
                    >
                        Zagraj kartę {this.props.selectedCardId}
                    </div>
                    <div className="action-panel-button  end-turn">
                        Zakończ turę
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedCardId: state.game.selectedCardId
})

const mapDispatchToProps = {
    serverPlayCard
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionPanel);