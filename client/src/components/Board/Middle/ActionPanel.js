import React from 'react';

class ActionPanel extends React.Component {

    render() {
        return (
            <div className="container-action-panel active">
                <div className="action-panel">
                    <div className="action-panel-button make-action">
                        Zagraj kartę
                    </div>
                    <div className="action-panel-button  end-turn">
                        Zakończ turę
                    </div>
                </div>
            </div>
        )
    }
}


export default ActionPanel;