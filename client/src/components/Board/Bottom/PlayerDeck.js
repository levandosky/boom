import React from "react";
import {connect} from 'react-redux'
import Card from "./Card";

class PlayerDeck extends React.Component {

    render() {
        const {cards} = this.props
        return (
            <div>
                {cards.map(card => <Card card={card} key={card.text}/>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cards: [{text: 'AS'}, {text: 'JOKER'}]
    }
}

export default connect(mapStateToProps)(PlayerDeck);
