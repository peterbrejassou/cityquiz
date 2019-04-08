import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import HeaderBack from '../Header/HeaderBack';
import { appStyle, inputStyle, loginStyle, buttonStyle, parametresStyle } from '../../styles/styles';

class UpdateEmailScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentEmailUser: this.props.userConnected.email,
            newEmailUser: null,
            confirmNewEmailUser: null,
            emailsMatch : true,
            isEmailGoodFormat: true
        }
    }

    // Fonction permettant de mettre à jour l'email de l'utilisateur
    _updateEmailUser() {
        // On définit notre regex de référence mail
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
        // Si les 2 champs email et confirmation sont égaux
        if(this.state.newEmailUser === this.state.confirmNewEmailUser){
           // On efface le message d'erreur (cas utile lors d'un nouvel envoi)
           this.setState({ emailsMatch: true });
            // Si l'email match avec le regex
            if (regexEmail.test(this.state.newEmailUser)){
                // On efface le message d'erreur (cas utile lors d'un nouvel envoi)
                this.setState({ isEmailGoodFormat: true });
                // On envoi la nouvelle adresse au store
                this.props.dispatch({ type: 'UPDATE_EMAIL_USER', email: this.state.newEmailUser });
                // On redirige vers le menu
                this.props.navigation.push('Menu');
            } else {
                this.setState({ isEmailGoodFormat: false });
            }
        } else{
            this.setState({ emailsMatch: false });
        }
    }

    render() {
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderBack title="Paramètres" navigation={this.props.navigation} />

                <View style={parametresStyle.firstView}>
                    <Text style={[appStyle.customFont, parametresStyle.titleUpdate]}>Mettre à jour l'adresse email</Text>
                    
                    <View style={parametresStyle.updateEmailView}>
                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Adresse email actuelle</Text>
                        <TextInput autoCapitalize="none" keyboardType="email-address" style={[appStyle.customFont, inputStyle.input, parametresStyle.input, parametresStyle.disableInput]} value={this.state.currentEmailUser} editable={false} />

                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Nouvelle adresse email</Text>
                        <TextInput autoCapitalize="none" keyboardType="email-address" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(newEmailUser) => this.setState({ newEmailUser })} onSubmitEditing={() => this.confirmMailTextInput.focus()} />
                        
                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Confirmation</Text>
                        <TextInput autoCapitalize="none" keyboardType="email-address" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(confirmNewEmailUser) => this.setState({ confirmNewEmailUser })} ref={(input) => this.confirmMailTextInput = input} onSubmitEditing={() => this._updateEmailUser()} />

                        <Text style={[loginStyle.badOrEmptyLogs, this.state.emailsMatch ? { display: 'none' } : { display: 'flex' }]}>Les adresses email ne correspondent pas</Text>
                        <Text style={[loginStyle.badOrEmptyLogs, this.state.isEmailGoodFormat ? { display: 'none' } : { display: 'flex' }]}>L'adresse email n'est pas au bon format</Text>
                        
                        <Button onPress={() => this._updateEmailUser()} title="Valider" buttonStyle={[buttonStyle.connexion, parametresStyle.btnUpdate]} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userConnected: state.userConnectedReducer.userConnected
    };
}
export default connect(mapStateToProps)(UpdateEmailScreen);