import React from "react";
import {connect} from 'react-redux'
import Card from "../Middle/Card";
import './Bottom.css'

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

    mapCards = (card) =>
        <div className='bottomCardContainer' key={card.id}>
            <Card card={card}/>
        </div>
}

const mapStateToProps = state => {
    return {
        cards: state.user.hand
    }
}

export default connect(mapStateToProps)(PlayerDeck);
