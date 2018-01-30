import React from "react";
import {connect} from 'react-redux'
import './Bottom.css'
import BottomCard from "./BottomCard";

class PlayerDeck extends React.Component {

    constructor(props) {
        super(props)
        this.state = {selectedIds: []}
    }

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

    mapCards = (card) => <BottomCard card={card} key={card.id} selectCardId={this.selectCardId}/>

    selectCardId = (cardId, isSelected) => {
        this.setState((prevState) => {
            let selectedIds = prevState.selectedIds.slice();

            if (isSelected) {
                selectedIds = prevState.selectedIds.filter((e) => ![cardId].includes(e))
            }else{
                selectedIds.push(cardId);
            }

            return {selectedIds};

        })
        console.log(this.state.selectedIds)
    }
}

const mapStateToProps = state => {
    return {
        cards: state.user.hand
    }
}

export default connect(mapStateToProps)(PlayerDeck);
