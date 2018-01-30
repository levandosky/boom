import React from "react";
import {connect} from 'react-redux'
import Card from "../Middle/Card";

class BottomCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {isSelected: false}
    }

    render() {
        const {card} = this.props
        const {isSelected} = this.state
        return (
            <div className={`bottomCardContainer ${isSelected ? ' selected' : ''}`} onClick={this.selectCard}>
                <Card card={card}/>
            </div>
        )
    }

    selectCard = () => {
        // this.isValid() ?
            this.props.selectCardId(this.props.card.id, this.state.isSelected, this.props.card.type)
            this.setState((prevState) => {
                return {isSelected: !prevState.isSelected}
            })
            // : null
    }

}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps)(BottomCard);
