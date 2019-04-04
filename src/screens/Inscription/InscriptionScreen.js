import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { appStyle, loginStyle, inputStyle, buttonStyle, forgotPasswordStyle } from '../../styles/styles';

export default class InscriptionScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usernameInput: null,
            emailInput: null,
            passwordInput: null,
            passwordConfirmInput: null
        }
    }

    render() {
        return (
            <View style={appStyle.body}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={forgotPasswordStyle.header}>
                    <Image style={appStyle.backLogo} source={require('../../../assets/img/back.png')} />
                </TouchableOpacity>

                <ScrollView>
                    <View style={[appStyle.padding, appStyle.mainView]}>
                        <View style={forgotPasswordStyle.firstSection}>
                            <Image source={require('../../../assets/img/logoApp.png')} style={{ width: 120, height: 103 }} />
                            <Text style={[appStyle.customFont, loginStyle.title]}>City Quiz</Text>
                            <Text style={[appStyle.customFont, forgotPasswordStyle.title]}>Bienvenue !</Text>
                        </View>

                        <ScrollView style={forgotPasswordStyle.secondSection}>
                            <Text style={[appStyle.customFont, loginStyle.inputTitles, forgotPasswordStyle.input]}>Nom d'utilisateur</Text>
                            <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input]} onChangeText={(usernameInput) => this.setState({ usernameInput })} />

                            <Text style={[appStyle.customFont, loginStyle.inputTitles, forgotPasswordStyle.input]}>Adresse email</Text>
                            <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input]} onChangeText={(emailInput) => this.setState({ emailInput })} />

                            <Text style={[appStyle.customFont, loginStyle.inputTitles, forgotPasswordStyle.input]}>Mot de passe</Text>
                            <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input]} onChangeText={(passwordInput) => this.setState({ passwordInput })} />

                            <Text style={[appStyle.customFont, loginStyle.inputTitles, forgotPasswordStyle.input]}>Confirmation du mot de passe</Text>
                            <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input]} onChangeText={(passwordConfirmInput) => this.setState({ passwordConfirmInput })} />
                        </ScrollView>

                        <View style={[loginStyle.thirdSection, forgotPasswordStyle.btnView]}>
                            <Button onPress={() => { }} title="Envoyer" buttonStyle={buttonStyle.connexion} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}