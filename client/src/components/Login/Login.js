import React from "react";
import {connect} from 'react-redux';
import {Button, Form, Grid, Input, Segment} from "semantic-ui-react";

import './LoginStyles.css';

import {serverLogin} from '../../reducers/UserReducer';


class Login extends React.Component {

    state = {player: '', submittedPlayer: ''}

    handleChange = (e, {name, value}) => this.setState({[name]: value})

    handleSubmit = () => {
        const {player} = this.state
        this.props.serverLogin(player);
        localStorage.setItem('playerName', player);
        this.props.history.push('/board');
    }

    render() {
        const {player} = this.state

        return (
            <Segment className='Board' vertical style={{height: '100vh'}}>

                <Grid centered columns={3} verticalAlign='middle' style={{height: '100%'}}>
                    <Grid.Column>
                        <div className="login-logo">

                        </div>
                        <Form
                            size='small'
                            onSubmit={this.handleSubmit}
                        >
                            <Form.Field>
                                <label>Nazwa gracza</label>
                                <Input
                                    placeholder='Nazwa gracza'
                                    name='player'
                                    value={player}
                                    onChange={this.handleChange}/>
                            </Form.Field>
                            <Button
                                type='submit'
                            >
                                Zaloguj
                            </Button>

                        </Form>
                    </Grid.Column>
                </Grid>


            </Segment>
        )
    }

}

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {
  serverLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
