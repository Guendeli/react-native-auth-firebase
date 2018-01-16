import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardItem, InputField, Spinner} from './common';

class LoginForm extends Component 
{
    state = {email: '', password: '', error: '', loading: false}

    onButtonPress()
    {
        // deconstructing state params
        const {email, password} = this.state;
        this.setState({error: '', loading: true});

        // Attempt to sign in
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSucess.bind(this))
        .catch(() => {
            //in case of error, let's just create an account, for the sake of learning
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSucess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginSucess(){
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onLoginFail(){
        // well, sum tin wong, let's show an error message
        this.setState({
            error: "Authentification Failed.",
            loading: false
        });
    }

    renderButton()
    {
        if(this.state.loading){
            return(
                <Spinner size='small'/>
            );
        } else {
            return(
                <Button
                onPress = {this.onButtonPress.bind(this)}
                >
                    Log In
                </Button>
            );
        }
    }

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
                            email => this.setState({email})
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

                <Text style = {styles.errorTextStyle} >
                    {this.state.error}
                </Text>

                <CardItem>
                   {this.renderButton()}
                </CardItem>

            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;