import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Header from '../Header/Header';
import { appStyle, inputStyle, loginStyle, buttonStyle, parametresStyle } from '../../styles/styles';

export default class UpdatePasswordScreen extends React.Component {
    render() {
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <Header title="Paramètres" navigation={this.props.navigation} />

                <View style={parametresStyle.firstView}>
                    <Text style={[appStyle.customFont, parametresStyle.titleUpdate]}>Mettre à jour le mot de passe</Text>

                    <View style={parametresStyle.updateEmailView}>
                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Ancien mot de passe</Text>
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(oldPassword) => this.setState({ oldPassword })} />

                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Nouveau mot de passe</Text>
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(newPassword) => this.setState({ newPassword })} />

                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Confirmation mot de passe</Text>
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(newPasswordConfirm) => this.setState({ newPasswordConfirm })} />

                        <Button onPress={() => { }} title="Valider" buttonStyle={[buttonStyle.connexion, parametresStyle.btnUpdate]} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                    </View>
                </View>
            </View>
        );
    }
}