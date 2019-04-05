import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { appStyle, loginStyle, inputStyle, buttonStyle, forgotPasswordStyle } from '../../styles/styles';

class ForgotPasswordScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailInput: null,
            isEmailGoodFormat: true,
            isEmailUnknown: false
        }
    }

    _sendEmailResetPassword(){
        // Création du regex pour vérifier le format de l'email saisi
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // Si l'email match avec le regex
        if (!regexEmail.test(this.state.emailInput)) {
            this.setState({ isEmailGoodFormat: false });
        } else{
            this.setState({ isEmailGoodFormat: true });
            
            var userConcerned = this.props.users.find((user) => {
                return user.email === this.state.emailInput
            });

            if (userConcerned !== undefined) {
                this.setState({ isEmailUnknown: false });

                var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
                var randomPassword = "";
                for (var i = 0; i < 8; i++) {
                    var j = Math.floor(Math.random() * chars.length);
                    randomPassword += chars.charAt(j);
                }

                // On set le nouveau mot de passe utilisateur dans le store
                this.props.dispatch({ type: 'UPDATE_PASSWORD_USER', user: userConcerned, newPassword: randomPassword });

                // On affiche le nouveau mot de passe à l'utilisateur
                alert("Votre nouveau mot de passe est : " + randomPassword + ". Vous pouvez le changer depuis les paramètres de l'application.");
                this.props.navigation.navigate('Login');
            } else {
                this.setState({ isEmailUnknown: true });
            }
        }
    }

    render() {
        return (
            <View style={appStyle.body}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={forgotPasswordStyle.header}>
                    <Image style={appStyle.backLogo} source={require('../../../assets/img/back.png')} />
                </TouchableOpacity>
                <ScrollView contentContainerStyle={appStyle.body}>
                    <View style={[appStyle.padding, appStyle.mainView]}>
                        <View style={forgotPasswordStyle.firstSection}>
                            <Image source={require('../../../assets/img/logoApp.png')} style={{ width: 120, height: 103 }} />
                            <Text style={[appStyle.customFont, loginStyle.title]}>City Quiz</Text>
                            <Text style={[appStyle.customFont, forgotPasswordStyle.title]}>Mot de passe oublié</Text>
                        </View>

                        <View style={forgotPasswordStyle.secondSection}>
                            <Text style={[appStyle.customFont, forgotPasswordStyle.text]}>Saisissez votre adresse mail ci-dessous, vous recevrez les instructions pour réinitialiser votre mot de passe.</Text>
                            <Text style={[appStyle.customFont, loginStyle.inputTitles, forgotPasswordStyle.input]}>Adresse email</Text>
                            <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input]} onChangeText={(emailInput) => this.setState({ emailInput })} />
                            <Text style={[loginStyle.badOrEmptyLogs, !this.state.isEmailGoodFormat ? { display: 'flex' } : { display: 'none' }]}>L'adresse email n'est pas au bon format</Text>
                            <Text style={[loginStyle.badOrEmptyLogs, this.state.isEmailUnknown ? {display: 'flex'} : {display: 'none'}]}>L'adresse email n'existe pas dans la base de données</Text>
                        </View>

                        <View style={[loginStyle.thirdSection, forgotPasswordStyle.btnView]}>
                            <Button onPress={() => this._sendEmailResetPassword()} title="Envoyer" buttonStyle={buttonStyle.connexion} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.dataReducer.users
    };
}
export default connect(mapStateToProps)(ForgotPasswordScreen);