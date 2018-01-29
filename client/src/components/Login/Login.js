import React from "react";
import {connect} from 'react-redux';
import {Button, Form, Grid, Input, Segment} from "semantic-ui-react";

import {serverLogin} from '../../reducers/UserReducer';


class Login extends React.Component {

    state = {player: '', submittedPlayer: ''}

    handleChange = (e, {name, value}) => this.setState({[name]: value})

    handleSubmit = () => {
        const {player} = this.state
        this.props.serverLogin(player);
        this.props.history.push('/board');
    }

    render() {
        const {player} = this.state

        return (
            <Segment className='Board' vertical style={{height: '100vh'}}>

                <Grid centered columns={3} verticalAlign='middle' style={{height: '100%'}}>
                    <Grid.Column>
                        <Form
                            size='mini'
                            onSubmit={this.handleSubmit}
                        >
                            <Form.Field>
                                <label>Player</label>
                                <Input
                                    placeholder='Player'
                                    name='player'
                                    value={player}
                                    onChange={this.handleChange}/>
                            </Form.Field>
                            <Button
                                type='submit'
                            >
                                Login
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
