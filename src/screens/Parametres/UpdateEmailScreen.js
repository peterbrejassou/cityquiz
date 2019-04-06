import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import HeaderBack from '../Header/HeaderBack';
import { appStyle, inputStyle, loginStyle, buttonStyle, parametresStyle } from '../../styles/styles';

export default class UpdateEmailScreen extends React.Component {
    render() {
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderBack title="Paramètres" navigation={this.props.navigation} />

                <View style={parametresStyle.firstView}>
                    <Text style={[appStyle.customFont, parametresStyle.titleUpdate]}>Mettre à jour l'adresse email</Text>
                    
                    <View style={parametresStyle.updateEmailView}>
                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Adresse email</Text>
                        <TextInput autoCapitalize="none" keyboardType="email-address" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(newMail) => this.setState({ newMail })} onSubmitEditing={() => this.confirmPasswordTextInput.focus()} />
                        
                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Confirmation</Text>
                        <TextInput autoCapitalize="none" keyboardType="email-address" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(newMailConfirm) => this.setState({ newMailConfirm })} ref={(input) => this.confirmPasswordTextInput = input} onSubmitEditing={() => {}} />

                        <Button onPress={() => {}} title="Valider" buttonStyle={[buttonStyle.connexion, parametresStyle.btnUpdate]} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                    </View>
                </View>
            </View>
        );
    }
}