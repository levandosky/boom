import React from "react";
import Top from "./Top"
import Bottom from "./Bottom"
import Middle from "./Middle/Middle";

class Board extends React.Component {


    render() {
        return (
            <div>
                <div className="Board">
                    <Top/>
                    <Middle/>
                    <Bottom/>
                </div>
            </div>
        )
    }

}

export default Board;
