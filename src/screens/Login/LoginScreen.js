import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { appStyle, loginStyle, inputStyle, buttonStyle } from '../../styles/styles';
import { userData } from '../../../assets/mocks/userData';
import { niveauData } from '../../../assets/mocks/niveauData';

class LoginScreen extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            usernameInput: null,
            passwordInput: null,
            badPasswordBool: false
        }

        if(this.props.users === undefined) {
            this.props.dispatch({ type: 'INSERT_USER_DATA_FROM_MOCK', value: userData });
        }
        if (this.props.niveaux === undefined) {
         this.props.dispatch({ type: 'INSERT_NIVEAU_DATA_FROM_MOCK', value: niveauData });
        }
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
        if (this.props.userConnected === undefined || this.props.userConnected.prenom === "") {
            this.props.users.map((user) => {
                if (usernameInput == user.username && passwordInput == user.password) {
                    this.setState({ badPasswordBool: true });
                    this.props.dispatch({ type: 'LOG_USER', value: user });
                    this.props.navigation.navigate('Menu');
                } else if (!this.state.badPasswordBool) {
                    alert("Mauvais identifiants");
                    this.setState({badPasswordBool: true});
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
                        {<TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
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
        users: state.dataReducer.users,
        niveaux: state.dataReducer.niveaux,
        userConnected : state.userConnectedReducer.userConnected
    };
}
export default connect(mapStateToProps)(LoginScreen);