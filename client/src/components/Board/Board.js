import React from "react";
import Top from "./Top"
import Bottom from "./Bottom"

class Board extends React.Component {


    render() {
        return (
            <div>
                <div className="Board">
                    <Top/>
                    <Bottom/>
                </div>
            </div>
        )
    }

}

export default Board;
