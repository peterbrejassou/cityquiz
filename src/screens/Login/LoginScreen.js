import React from 'react';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
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
            emptyLogs: false,
            badLogs: false
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

        this.setState({
            emptyLogs: false,
            badLogs: false
        });

        // On récupère la valeur des champs input
        let usernameInput = this.state.usernameInput;
        let passwordInput = this.state.passwordInput;

        // Si un des champs (ou les deux) est vide
        if(usernameInput === null || passwordInput === null || usernameInput === "" || passwordInput === ""){
            this.setState({ emptyLogs: true });
        } 
        // Si l'utilisateur n'est pas connecté (undefined) ou s'il était connecté et s'est déconnecté (prenom = "")
        else if (this.props.userConnected === undefined || this.props.userConnected.prenom === "") {
            // On parcours la liste des utilisateurs stockés dans le store

            var userLog = this.props.users.find((user) => {
                return user.username === usernameInput && user.password === passwordInput
            });

            if(userLog !== undefined){
                // On ajoute l'utilisateur connecté dans le store
                this.props.dispatch({ type: 'LOG_USER', value: userLog });

                // On dirige vers le Menu en faisant un reset du stack de navigation (empecher l'utilisateur de revenir sur la page de log)
                var resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Menu' })],
                });
                this.props.navigation.dispatch(resetAction);
            } else {
                this.setState({badLogs: true});
            }
        // Si l'utilisateur était déjà connecté et revient sur la page de connexion par un autre moyen que la déconnexion
        } else if (this.props.userConnected !== undefined){
            // On vérifie que ses identifiants sont bons
            if (usernameInput === this.props.userConnected.username && passwordInput === this.props.userConnected.password){
                // On dirige vers le Menu en faisant un reset du stack de navigation (empecher l'utilisateur de revenir sur la page de log)
                var resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Menu' })],
                });
                this.props.navigation.dispatch(resetAction);
            } else {
                this.setState({ badLogs: true });
            }   
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
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input]} onChangeText={(usernameInput) => this.setState({ usernameInput })} onSubmitEditing={() => { this.passwordTextInput.focus(); }} />
                        <Text style={[appStyle.customFont, loginStyle.inputTitles, loginStyle.secondInput]}>Mot de passe</Text>
                        <TextInput style={[appStyle.customFont, inputStyle.input]} autoCapitalize="none" secureTextEntry={true} onChangeText={(passwordInput) => this.setState({ passwordInput })} ref={(input) => { this.passwordTextInput = input; }} onSubmitEditing={() => this._checkLogin()}  />
                        {<TouchableOpacity onPress={() => this.props.navigation.push('ForgotPassword')}>
                            <Text style={loginStyle.forgetPwd}>Mot de passe oublié ?</Text>
                        </TouchableOpacity>}
                        <Text style={[loginStyle.badOrEmptyLogs, this.state.emptyLogs ? {display: 'flex'} : {display: 'none'}]}>Merci d'entrer vos identifiants avant de valider</Text>
                        <Text style={[loginStyle.badOrEmptyLogs, this.state.badLogs ? { display: 'flex' } : { display: 'none' }]}>Les identifiants ne sont pas bons, merci de les vérifier</Text>
                    </View>

                    <View style={loginStyle.thirdSection}>
                        <Button onPress={() => this._checkLogin() } title="Connexion" buttonStyle={buttonStyle.connexion} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                    </View>

                    <TouchableOpacity 
                        style={loginStyle.fourthSection}
                        onPress={() => { this.props.navigation.push('Inscription') }}>
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
        userConnected: state.userConnectedReducer.userConnected,
        niveaux: state.dataReducer.niveaux
    };
}
export default connect(mapStateToProps)(LoginScreen);