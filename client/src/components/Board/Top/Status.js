import React from "react";
import {connect} from "react-redux";

const statusContainer = {
    position: 'absolute',
    display: 'flex',
    height: '100%',
    right: 0,
    top: 0,
    fontFamily: 'Oswald',
    flexDirection: 'row-reverse'
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
    fontSize: '2vh',
    lineHeight: '2vh',
    paddingLeft: '3vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: '2vh',
    textTransform: 'uppercase'
}

const userStyles = {
    fontSize: '5vh',
    minWidth: '300px',
    lineHeight: '4vh',
    marginLeft: '-2px'
}

const bottomContent = {
    padding: '1vh',
    paddingTop: '2vh',
    paddingLeft: '3vh',
    fontSize: '1.5vh',
    backgroundColor: '#787878',
    color: '#ffffff'
}

const timeStyles = {
    fontFamily: 'Anton',
    fontSize: '31px',
    marginRight: '3px'
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

    findActiveUser = (user) => {
        return user.isActive;
    }

    render() {
        const {players} = this.props;
        let currentPlayerName = null;

        if(players.length > 0) {
            currentPlayerName = players.filter(this.findActiveUser)[0].name;
        }
        const {timeLimit} = this.state
        return (
            <div style={statusContainer}>
                <div style={content}>
                    <div style={topContent}>
                        <div >Kolej gracza</div>
                        <div style={userStyles}>{currentPlayerName}</div>
                    </div>
                    <div style={bottomContent}>Do końca tury <span className="time" style={timeStyles}>{timeLimit.toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    })}</span>s
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        players: state.players.list
    }
}

export default connect(mapStateToProps)(Status)
