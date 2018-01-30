import React from 'react';
import Card from "./Card";
import {connect} from "react-redux";
import {serverGetCard} from "../../../reducers/UserReducer";

class OtherCards extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        const {deckSize} = this.props
        return (
            <div className="container-others-cards">
                <div className="wrapper-other-cards">
                    <div
                        className="other-cards"
                        onClick={() => {
                            console.log('get card client')
                            this.props.serverGetCard();
                        }}
                    >
                        <Card
                            card={{type: 'back', description: null}}
                        />
                    </div>
                    <div className="container-others-cards-text">
                        <div className="other-cards-first-slogan">
                            W TALII POZOSTAŁO
                        </div>
                        <div className="other-cards-number">
                            {deckSize}
                        </div>
                        <div className="other-cards-second-slogan">
                            KART
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    serverGetCard
}

const mapStateToProps = (state) => {
    return {
        deckSize: state.game.deckSize
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherCards);