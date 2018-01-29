import React, { Component } from 'react';

class App extends Component {
    render() {
        return <BasicSvg />;
    }
}

const BasicSvg = () =>
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <circle
            cx="50"
            cy="50"
            r="40"
            stroke="blue"
            fill="lightblue"
        />
    </svg>

export default App;
