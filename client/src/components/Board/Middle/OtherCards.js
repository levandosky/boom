import React from 'react';
import Card from "./Card";

class OtherCards extends React.Component {

    render() {
        return (
            <div className="container-others-cards">
                <div className="wrapper-other-cards">
                    <div className="other-cards">
                        <Card
                            card={{type:'back', description: null}}
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


export default OtherCards;