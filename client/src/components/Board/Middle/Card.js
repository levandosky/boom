import React from 'react';

class Card extends React.Component {

    render() {
        const {type, description, category, action} = this.props.card
        return (
            <div className={`card ${type}`}>
                <div className="container-card-category">{category}</div>
                <div className="container-card-action">{action}</div>
                <div className="container-card-description">{description}</div>

            </div>
        )
    }
}


export default Card;