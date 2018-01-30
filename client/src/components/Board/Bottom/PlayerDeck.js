import React from "react";
import {connect} from 'react-redux'
import './Bottom.css'
import BottomCard from "./BottomCard";

class PlayerDeck extends React.Component {

    render() {
        const {cards} = this.props
        console.log(cards);
        return (
            <div className='playerDeckContainer'>
                {
                    cards ? cards.map(card => this.mapCards(card)) : null
                }
            </div>
        )
    }

    mapCards = (card) => <BottomCard card={card} key={card.id} selectPlayerCard={this.selectPlayerCard}/>

    // selectPlayerCard = (cardId) = {
    // }
}

const mapStateToProps = state => {
    return {
        cards: state.user.hand
    }
}

export default connect(mapStateToProps)(PlayerDeck);
