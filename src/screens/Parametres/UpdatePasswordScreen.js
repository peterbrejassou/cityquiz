import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import HeaderBack from '../Header/HeaderBack';
import { appStyle, inputStyle, loginStyle, buttonStyle, parametresStyle } from '../../styles/styles';

class UpdatePasswordScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentPasswordUser: null,
            newPasswordUser: null,
            confirmNewPasswordUser: null,
            isCurrentPasswordGood: true,
            passwordsMatch: true
        }
    }

    _updatePasswordUser() {
        if (this.state.currentPasswordUser === this.props.userConnected.password){
            this.setState({ isCurrentPasswordGood: true });
            if (this.state.newPasswordUser === this.state.confirmNewPasswordUser){
                // On efface le message d'erreur (cas utile lors d'un nouvel envoi)
                this.setState({ passwordsMatch: true });
                // On envoi le nouveau mot de passe au store
                this.props.dispatch({ type: 'UPDATE_PASSWORD_CURENT_USER', password: this.state.newPasswordUser });
                // On redirige vers le menu
                this.props.navigation.push('Menu');
            } else {
                this.setState({ passwordsMatch: false });
            }
        } else{
            this.setState({ isCurrentPasswordGood: false });
        }
    }

    render() {
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderBack title="Paramètres" navigation={this.props.navigation} />

                <View style={parametresStyle.firstView}>
                    <Text style={[appStyle.customFont, parametresStyle.titleUpdate]}>Mettre à jour le mot de passe</Text>

                    <View style={parametresStyle.updateEmailView}>
                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Ancien mot de passe</Text>
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(currentPasswordUser) => this.setState({ currentPasswordUser })} onSubmitEditing={() => this.passwordTextInput.focus()} />

                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Nouveau mot de passe</Text>
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(newPasswordUser) => this.setState({ newPasswordUser })} ref={(input) => this.passwordTextInput = input} onSubmitEditing={() => this.confirmPasswordTextInput.focus()} />

                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Confirmation mot de passe</Text>
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(confirmNewPasswordUser) => this.setState({ confirmNewPasswordUser })} ref={(input) => this.confirmPasswordTextInput = input} onSubmitEditing={() => this._updatePasswordUser()} />

                        <Text style={[loginStyle.badOrEmptyLogs, this.state.isCurrentPasswordGood ? { display: 'none' } : { display: 'flex' }]}>Le mot de passe actuel n'est pas le bon</Text>
                        <Text style={[loginStyle.badOrEmptyLogs, this.state.passwordsMatch ? { display: 'none' } : { display: 'flex' }]}>Les mots de passe ne correspondent pas</Text>

                        <Button onPress={() => this._updatePasswordUser()} title="Valider" buttonStyle={[buttonStyle.connexion, parametresStyle.btnUpdate]} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
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
export default connect(mapStateToProps)(UpdatePasswordScreen);