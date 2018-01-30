import React from 'react';
import {Modal} from "semantic-ui-react";
import {connect} from "react-redux";


class StartModal extends React.Component {

    render() {
        let visible = true;

        console.log('players ' + this.props.players);
        if (this.props.players && this.props.players.length >= 2) {
            visible = false;
        }

        return (
            <div>
                <Modal size='mini' open={visible}>
                    <Modal.Header>
                        Oczekiwanie na resztę graczy
                    </Modal.Header>
                    <Modal.Content>
                        <p>Aby rozpocząć grę należy poczekać aż do pokoju dołączy 4 graczy</p>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        players: state.players.list
    }
}

export default connect(mapStateToProps)(StartModal);