import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Header from '../Header/Header';
import { appStyle, inputStyle, loginStyle, buttonStyle, parametresStyle } from '../../styles/styles';

export default class UpdateEmailScreen extends React.Component {
    render() {
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <Header title="Paramètres" navigation={this.props.navigation} />

                <View style={parametresStyle.firstView}>
                    <Text style={[appStyle.customFont, parametresStyle.titleUpdate]}>Mettre à jour l'adresse email</Text>
                    
                    <View style={parametresStyle.updateEmailView}>
                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Adresse email</Text>
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(newMail) => this.setState({ newMail })} />
                        
                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Confirmation</Text>
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(newMailConfirm) => this.setState({ newMailConfirm })} />

                        <Button onPress={() => {}} title="Valider" buttonStyle={[buttonStyle.connexion, parametresStyle.btnUpdate]} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                    </View>
                </View>
            </View>
        );
    }
}