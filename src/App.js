import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';
class App extends Component {

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDq9jauTMp5Vpcv4InWsr1z871yqKoZATA",
            authDomain: "react-native-auth-5fa0b.firebaseapp.com",
            databaseURL: "https://react-native-auth-5fa0b.firebaseio.com",
            projectId: "react-native-auth-5fa0b",
            storageBucket: "react-native-auth-5fa0b.appspot.com",
            messagingSenderId: "849577239320"
          });
    }

    render(){
        return(
            <View>
                <Header headerText = "Authentification" />
                <LoginForm />
            </View>
        );
    }
}

export default App;