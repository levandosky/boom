import React, {Component} from 'react';

import {Route, withRouter} from "react-router-dom";
import Board from "./components/Board/Board";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getUser} from './services/userService';

class App extends Component {

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        return (
            <div className="App" style={{backgroundColor: '#F8F8F8', height: '100%'}}>
                <Route
                    exact
                    path={'/board'}
                    component={Board}
                >
                </Route>

                <Route
                    path={'/'}
                    exact
                    component={Login}
                >
                </Route>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
}

const mapDispatchToProps = {
    getUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
