import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, CardItem, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = {loggedIn: null};

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDq9jauTMp5Vpcv4InWsr1z871yqKoZATA",
            authDomain: "react-native-auth-5fa0b.firebaseapp.com",
            databaseURL: "https://react-native-auth-5fa0b.firebaseio.com",
            projectId: "react-native-auth-5fa0b",
            storageBucket: "react-native-auth-5fa0b.appspot.com",
            messagingSenderId: "849577239320"
          });

          firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
          });
    }

    logoutUser(){
       
    }
    renderContent(){
        if(this.state.loggedIn){
            return(
                <CardItem>
                    <Button onPress={() =>  firebase.auth().signOut() }
                    > Log Out </Button>
                </CardItem>
            );
        } else {
            
        }
        switch(this.state.loggedIn){
            case true:
                return(
                    <CardItem>
                        <Button>
                            Log Out
                        </Button>
                    </CardItem>
                );
                break;

            case false:
                return(
                    <LoginForm />
                );
                break;

            default:
                return(
                    <CardItem>
                        <Spinner/>
                    </CardItem>
                );
                break;
        }
    }
    render(){
        return(
            <View style={{ flex: 1 }} >
                <Header headerText = "Authentification" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;