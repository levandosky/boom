import React from 'react';
import './styles/Middle.css';
import UsedCards from "./UsedCards";
import OtherCards from "./OtherCards";
import Chat from "./Chat";

class Middle extends React.Component {

    render() {
        return (
            <div className="container-middle">
                <UsedCards/>
                <OtherCards/>
                <Chat/>
            </div>
        )
    }
}


export default Middle;