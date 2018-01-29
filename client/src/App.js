import React, {Component} from 'react';

import {Route} from "react-router-dom";
import Board from "./components/Board/Board";
import Login from "./components/Login/Login";
import {connect} from "react-redux";

class App extends Component {
    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    USER: {this.props.user && this.props.user.currentUser}
                </p>

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

export default connect(mapStateToProps)(App);
