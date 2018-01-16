import React, {Component} from 'react';
import {Button, Card, CardItem, InputField} from './common';

class LoginForm extends Component 
{
    state = {email: '', password: ''}


    render()
    {
        return(
            <Card>
                <CardItem>
                    <InputField 
                        placeholder="user@mail.com"
                        label="Email"
                        value = {this.state.email}
                        onChangeText = {
                            text => this.setState({email: text})
                        }
                    >

                    </InputField>
                </CardItem>

                <CardItem>
                    <InputField
                        secureTextEntry={true}
                        placeholder="password"
                        label="Password"
                        value = {this.state.password}
                        onChangeText = {
                            text => this.setState({password: text})
                        }
                    />
                </CardItem>

                <CardItem>
                    <Button>
                        Log In
                    </Button>
                </CardItem>

            </Card>
        );
    }
}

export default LoginForm;