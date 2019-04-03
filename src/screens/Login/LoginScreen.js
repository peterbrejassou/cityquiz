import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { appStyle, loginStyle, inputStyle, buttonStyle } from '../../styles/styles';
import { userData } from '../../../assets/mocks/userData';

class LoginScreen extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            usernameInput: null,
            passwordInput: null
        }
    }

    // Fonction permettant d'ajouter l'utilisateur connecté au store redux
    _setCurrentUserInStore(user){
        this.props.dispatch({ type: 'CONNECT_USER', value: user});
    }
    
    // Fonction permettant de vérifier si l'utilisateur est connu dans la BD et naviguer vers l'écran suivant si la connexion est réussie
    _checkLogin() {
        let usernameInput = this.state.usernameInput;
        let passwordInput = this.state.passwordInput;

        // Si un des deux champs est vide
        if(usernameInput == null || passwordInput == null){
            alert("Entrez vos identifiants avant de valider.");
        }

        // Si l'utilisateur n'est pas connecté
        if (this.props.userConnected === null || this.props.userConnected.prenom === "") {
            userData.map((user) => {
                if (usernameInput == user.username && passwordInput == user.password) {
                    this._setCurrentUserInStore(user);
                    this.props.navigation.navigate('Menu');
                } 
            }); 
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={appStyle.body}>
                <View style={[appStyle.padding, appStyle.mainView]}>
                    <View style={loginStyle.firstSection}>
                        <Image source={require('../../../assets/img/logoApp.png')} style={{ width: 120, height: 103 }} />
                        <Text style={[appStyle.customFont, loginStyle.title]}>City Quiz</Text>
                    </View>

                    <View style={loginStyle.secondSection}>
                        <Text style={[appStyle.customFont, loginStyle.inputTitles]}>Nom d'utilisateur</Text>
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input]} onChangeText={(usernameInput) => this.setState({ usernameInput })} />
                        <Text style={[appStyle.customFont, loginStyle.inputTitles, loginStyle.secondInput]}>Mot de passe</Text>
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input]} secureTextEntry={true} onChangeText={(passwordInput) => this.setState({ passwordInput })} onSubmitEditing={() => this._checkLogin() } />
                        {<TouchableOpacity>
                            <Text style={loginStyle.forgetPwd}>Mot de passe oublié ?</Text>
                        </TouchableOpacity>}
                    </View>

                    <View style={loginStyle.thirdSection}>
                        <Button onPress={() => this._checkLogin() } title="Connexion" buttonStyle={buttonStyle.connexion} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                    </View>

                    <TouchableOpacity 
                        style={loginStyle.fourthSection}
                        onPress={() => { this.props.navigation.navigate('Inscription') }}>
                        <Text style={[appStyle.customFont, loginStyle.register]}>Pas encore de compte ? </Text>
                        <Text style={[appStyle.customFont, loginStyle.register, loginStyle.colorRegister]}>Inscrivez-vous !</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        userConnected : state.userConnected
    };
}
export default connect(mapStateToProps)(LoginScreen);