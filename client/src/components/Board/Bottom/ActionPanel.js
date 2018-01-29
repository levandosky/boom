import React from "react";

const actionPanelContainer = {}

class ActionPanel extends React.Component {

    render() {
        return (
            <div style={actionPanelContainer}>
                <div>PANEL AKCJI</div>
                <button>Dobierz kartę</button>
            </div>
        )
    }
}


export default ActionPanel;
