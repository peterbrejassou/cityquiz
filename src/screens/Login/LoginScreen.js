import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { appStyle, loginStyle, inputStyle, buttonStyle } from '../../styles/styles';
import { userData } from '../../../assets/mocks/userData';

export default class LoginScreen extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            isConnected: false
        }
    }
    
    _checkLogin() {
        let usernameInput = this.state.username;
        let passwordInput = this.state.password;

        if(usernameInput == null || passwordInput == null){
            alert("Entrez vos identifiants avant de valider")
        }

        userData.map((user) => {
            if(!this.state.isConnected){
                if (usernameInput == user.username && passwordInput == user.password) {
                    this.setState({isConnected: true});
                    this.setState({user});
                    this.props.navigation.navigate('Menu');
                }
            } else{
                alert("Les identifiants ne sont pas les bons");
            }
        });
    }


    render() {
        return (
            <ScrollView contentContainerStyle={appStyle.body}>
                <View style={[appStyle.padding, appStyle.mainView]}>
                    <View style={loginStyle.firstSection}>
                        <Image source={require('../../../assets/img/logoApp.png')} style={{ width: 120, height: 103 }} />
                        <Text style={loginStyle.title}>City Quiz</Text>
                    </View>

                    <View style={loginStyle.secondSection}>
                        <Text style={loginStyle.inputTitles}>Nom d'utilisateur</Text>
                        <TextInput style={inputStyle.input} onChangeText={(username) => this.setState({ username })} />
                        <Text style={[loginStyle.inputTitles, loginStyle.secondInput]}>Mot de passe</Text>
                        <TextInput style={inputStyle.input} secureTextEntry={true} onChangeText={(password) => this.setState({password})} />
                        <TouchableOpacity>
                            <Text style={loginStyle.forgetPwd}>Mot de passe oublié ?</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={loginStyle.thirdSection}>
                        <Button onPress={() => {this._checkLogin()}} title="Connexion" buttonStyle={buttonStyle.connexion} titleStyle={buttonStyle.titleButtonStyle} />
                    </View>

                    <TouchableOpacity 
                        style={loginStyle.fourthSection}
                        onPress={() => { this.props.navigation.navigate('Inscription') }}>
                        <Text style={loginStyle.register}>Pas encore de compte ? </Text>
                        <Text style={[loginStyle.register, loginStyle.colorRegister]}>Inscrivez-vous !</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}