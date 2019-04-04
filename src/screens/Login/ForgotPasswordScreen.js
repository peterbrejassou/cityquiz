import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { appStyle, loginStyle, inputStyle, buttonStyle, forgotPasswordStyle } from '../../styles/styles';

export default class ForgotPasswordScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailInput: null
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
                        </View>

                        <View style={[loginStyle.thirdSection, forgotPasswordStyle.btnView]}>
                            <Button onPress={() => { }} title="Envoyer" buttonStyle={buttonStyle.connexion} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}