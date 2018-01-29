import React from "react";

class Card extends React.Component {

    render() {
        const {card} = this.props
        return (
            <div>
                {card.text}
            </div>
        )
    }
}

export default Card;
