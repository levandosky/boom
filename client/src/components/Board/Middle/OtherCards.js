import React from 'react';
import Card from "./Card";
import {connect} from "react-redux";
import {serverGetCard} from "../../../reducers/UserReducer";

class OtherCards extends React.Component {

    render() {
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
                            33
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

export default connect(null, mapDispatchToProps)(OtherCards);