import React, {Component} from 'react';

const fillColor = {
    active: 'rgb(255,128,0)',
    notActive: 'rgb(132,132,132)'
}

class PlayerAvatar extends Component {

    render() {
        return (
            <svg width="7vh" height="100%" viewBox="0 0 67 113">
                <g transform="matrix(1,0,0,1,-4121.05,-509.772)">
                    <g transform="matrix(0.755482,0,0,0.755482,3330.44,-84.5014)">
                        <g transform="matrix(1,0,0,1,-100.355,28.9817)" style={this.getFillColor()}>
                            <g transform="matrix(1.28986,0,0,1.28986,-345.194,-186.401)">
                                <circle cx="1190.92" cy="766.048" r="34.157"/>
                            </g>
                            <path
                                d="M1159.7,838.074C1168.09,845.283 1179,849.641 1190.92,849.641C1202.84,849.641 1213.75,845.283 1222.14,838.074C1230.02,845.23 1234.98,855.558 1234.98,867.034L1234.98,906.142L1146.86,906.142L1146.86,867.034C1146.86,855.558 1151.82,845.23 1159.7,838.074Z"
                            />
                        </g>
                    </g>
                </g>
            </svg>
        );
    }

    getFillColor = () => this.props.isActive ? {fill: fillColor.active} : {fill: fillColor.notActive}
}


export default PlayerAvatar;
