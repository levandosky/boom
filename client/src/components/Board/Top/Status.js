import React from "react";
import {connect} from "react-redux";

const statusContainer = {
    display: 'flex',
    width: '100%',
    flexDirection: 'row-reverse',
    margin: '5px'
}

const content = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}

const topContent = {
    backgroundColor: '#D1D1D1',
    color: '#898989',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
}

const bottomContent = {
    backgroundColor: '#787878',
    color: '#ffffff'
}

class Status extends React.Component {

    constructor(props) {
        super(props)
        this.initialTimeLimit = 50;
        this.state = {timeLimit: this.initialTimeLimit}
    }

    componentDidMount() {
        this.timer = setInterval(() => this.countDown(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    countDown = () => {
        if (this.state.timeLimit > 0) {
            this.setState((prevState) => {
                return {timeLimit: prevState.timeLimit - 1}
            })
        } else {
            this.resetTimer();
        }
    }

    resetTimer = () => {
        this.setState({timeLimit: this.initialTimeLimit})
    }

    render() {
        const {currentPlayer} = this.props
        const {timeLimit} = this.state
        return (
            <div style={statusContainer}>
                <div style={content}>
                    <div style={topContent}>
                        <div>Kolej gracza</div>
                        <div>{currentPlayer}</div>
                    </div>
                    <div style={bottomContent}>Do końca tury {timeLimit.toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    })}s
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentPlayer: 'PIK POK'
    }
}

export default connect(mapStateToProps)(Status)
