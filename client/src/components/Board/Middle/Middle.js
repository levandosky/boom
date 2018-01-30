import React from 'react';
import UsedCards from "./UsedCards";
import OtherCards from "./OtherCards";
import ActionPanel from "./ActionPanel";

class Middle extends React.Component {

    render() {
        return (
            <div className="container-middle">
                <UsedCards/>
                <OtherCards/>
                <ActionPanel/>
            </div>
        )
    }
}


export default Middle;