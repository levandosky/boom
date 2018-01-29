import React from 'react';

class Card extends React.Component {

    render() {
        return (
            <div className={`card ${this.props.type}`}>
                <div className="container-card-type">{this.props.type}</div>

                <div className="container-card-description">{this.props.description}</div>

            </div>
        )
    }
}


export default Card;