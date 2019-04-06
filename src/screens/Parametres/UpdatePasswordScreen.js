import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import HeaderBack from '../Header/HeaderBack';
import { appStyle, inputStyle, loginStyle, buttonStyle, parametresStyle } from '../../styles/styles';

class UpdatePasswordScreen extends React.Component {
    render() {
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderBack title="Paramètres" navigation={this.props.navigation} />

                <View style={parametresStyle.firstView}>
                    <Text style={[appStyle.customFont, parametresStyle.titleUpdate]}>Mettre à jour le mot de passe</Text>

                    <View style={parametresStyle.updateEmailView}>
                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Ancien mot de passe</Text>
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(oldPassword) => this.setState({ oldPassword })} onSubmitEditing={() => this.passwordTextInput.focus()} />

                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Nouveau mot de passe</Text>
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(newPassword) => this.setState({ newPassword })} ref={(input) => this.passwordTextInput = input} onSubmitEditing={() => this.confirmPasswordTextInput.focus()} />

                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Confirmation mot de passe</Text>
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(newPasswordConfirm) => this.setState({ newPasswordConfirm })} ref={(input) => this.confirmPasswordTextInput = input} onSubmitEditing={() => {}} />

                        <Button onPress={() => { }} title="Valider" buttonStyle={[buttonStyle.connexion, parametresStyle.btnUpdate]} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
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