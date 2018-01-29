import React from "react";
import {connect} from 'react-redux'
import Card from "../Middle/Card";

class PlayerDeck extends React.Component {

    render() {
        const {cards} = this.props
        return (
            <div>
                {cards ? cards.map(card => <Card card={card} key={card.text} />) : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cards: state.user.hand
    }
}

export default connect(mapStateToProps)(PlayerDeck);
