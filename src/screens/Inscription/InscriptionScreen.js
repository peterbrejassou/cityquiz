import React from 'react';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
import { View, Text, ScrollView, TextInput } from 'react-native';
import HeaderBack from '../Header/HeaderBack';
import { Button, Image } from 'react-native-elements';
import { appStyle, loginStyle, inputStyle, buttonStyle, forgotPasswordStyle, headerStyle } from '../../styles/styles';

class InscriptionScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usernameInput: null,
            emailInput: null,
            passwordInput: null,
            passwordConfirmInput: null,
            nomInput: null,
            prenomInput: null,
            isfieldEmpty: false,
            isPasswordsMatching: true,
            isEmailGoodFormat: true
        }
    }

    // Fonction permettant d'ajouter un nouvel utilisateur
    _addNewUser(){
        // Si un des champs est vide
        if (this.state.usernameInput === null || this.state.usernameInput === "" || this.state.emailInput === null || this.state.emailInput === "" || this.state.passwordInput === null || this.state.passwordInput === "" || this.state.passwordConfirmInput === null || this.state.passwordConfirmInput === ""){
            this.setState({ isfieldEmpty: true });
        // Si les champs sont tous remplis
        } else {
            // Création du regex pour vérifier le format de l'email saisi
            var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            // Si l'email match avec le regex
            if (regexEmail.test(this.state.emailInput)){
                // Si les deux champs de mot de passe correspondent
                if (this.state.passwordInput === this.state.passwordConfirmInput) {
                    // On créé un nouvel utilisateur
                    var newUser = {
                        id: this.props.users.length + 1,
                        username: this.state.usernameInput,
                        email: this.state.emailInput,
                        password: this.state.passwordInput,
                        nom: this.state.nomInput,
                        prenom: this.state.prenomInput,
                        photo: require("../../../assets/img/photo_default.png"),
                        nbPoints: 0,
                        nbPieces: 0,
                        badges: null
                    };
                    // On envoi le nouvel utilisateur au store redux
                    this.props.dispatch({ type: 'ADD_NEW_USER', value: newUser });
                    
                    // On connecte le nouvel utilisateur
                    this.props.dispatch({ type: 'LOG_USER', value: newUser });
                    
                    // On dirige vers le Menu en faisant un reset du stack de navigation (empecher l'utilisateur de revenir sur la page de log)
                    var resetAction = StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'Menu' })],
                    });
                    this.props.navigation.dispatch(resetAction);
                } else {
                    this.setState({ isPasswordsMatching: false });
                }
            } else {
                this.setState({ isEmailGoodFormat: false });
            }
        }
    }

    render() {
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderBack title="" navigation={this.props.navigation} />

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={headerStyle.scrollView}>
                    <View style={appStyle.mainView}>
                        <View style={forgotPasswordStyle.firstSection}>
                            <Image source={require('../../../assets/img/logoApp.png')} style={{ width: 120, height: 103 }} />
                            <Text style={[appStyle.customFont, loginStyle.title]}>City Quiz</Text>
                            <Text style={[appStyle.customFont, forgotPasswordStyle.title]}>Bienvenue !</Text>
                        </View>

                        <ScrollView style={forgotPasswordStyle.secondSection} showsVerticalScrollIndicator={false} >
                            <Text style={[appStyle.customFont, loginStyle.inputTitles, forgotPasswordStyle.input]}>Nom d'utilisateur</Text>
                            <TextInput autoCapitalize="none" autoComplete="username" style={[appStyle.customFont, inputStyle.input]} onChangeText={(usernameInput) => this.setState({ usernameInput })} onSubmitEditing={() => { this.emailTextInput.focus(); }} />

                            <Text style={[appStyle.customFont, loginStyle.inputTitles, forgotPasswordStyle.input]}>Adresse email</Text>
                            <TextInput autoCapitalize="none" keyboardType="email-address" style={[appStyle.customFont, inputStyle.input]} onChangeText={(emailInput) => this.setState({ emailInput })} ref={(input) => { this.emailTextInput = input; }} onSubmitEditing={() => { this.passwordTextInput.focus(); }} />
                            
                            <Text style={[loginStyle.badOrEmptyLogs, !this.state.isEmailGoodFormat ? { display: 'flex' } : { display: 'none' }]}>L'adresse email n'est pas au bon format</Text>

                            <Text style={[appStyle.customFont, loginStyle.inputTitles, forgotPasswordStyle.input]}>Mot de passe</Text>
                            <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input]} secureTextEntry={true} onChangeText={(passwordInput) => this.setState({ passwordInput })} ref={(input) => { this.passwordTextInput = input; }} onSubmitEditing={() => { this.confirmPasswordTextInput.focus(); }} />

                            <Text style={[appStyle.customFont, loginStyle.inputTitles, forgotPasswordStyle.input]}>Confirmation du mot de passe</Text>
                            <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input]} secureTextEntry={true} onChangeText={(passwordConfirmInput) => this.setState({ passwordConfirmInput })} ref={(input) => { this.confirmPasswordTextInput = input; }} onSubmitEditing={() => { this.nomTextInput.focus(); }} />
                        
                            <Text style={[appStyle.customFont, loginStyle.inputTitles, forgotPasswordStyle.input]}>Nom</Text>
                            <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(nomInput) => this.setState({ nomInput })} ref={(input) => { this.nomTextInput = input; }} onSubmitEditing={() => { this.prenomTextInput.focus(); }} />

                            <Text style={[appStyle.customFont, loginStyle.inputTitles, forgotPasswordStyle.input]}>Prénom</Text>
                            <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(prenomInput) => this.setState({ prenomInput })} ref={(input) => { this.prenomTextInput = input; }} onSubmitEditing={() => { this._addNewUser() }} />

                            <Text style={[loginStyle.badOrEmptyLogs, this.state.isfieldEmpty ? {display: 'flex'} : {display: 'none'}]}>Des champs sont vides</Text>
                            <Text style={[loginStyle.badOrEmptyLogs, !this.state.isPasswordsMatching ? {display: 'flex'} : {display: 'none'}]}>Les mots de passes ne correspondent pas</Text>
                        </ScrollView>

                        <View style={[loginStyle.thirdSection, forgotPasswordStyle.btnView]}>
                            <Button onPress={() => this._addNewUser()} title="Envoyer" buttonStyle={buttonStyle.connexion} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.dataReducer.users,
    };
}
export default connect(mapStateToProps)(InscriptionScreen);