import React from 'react';

class Card extends React.Component {

    render() {
        const {type, description} = this.props.card
        return (
            <div className={`card ${type}`}>
                <div className="container-card-type">{type}</div>

                <div className="container-card-description">{description}</div>

            </div>
        )
    }
}


export default Card;