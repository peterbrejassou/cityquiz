import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Header from '../Header/Header';
import { appStyle, inputStyle, loginStyle, buttonStyle, parametresStyle } from '../../styles/styles';

export default class UpdateProfilScreen extends React.Component {
    render() {
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <Header title="Paramètres" navigation={this.props.navigation} />

                <View style={parametresStyle.firstView}>
                    <Text style={[appStyle.customFont, parametresStyle.titleUpdate]}>Mettre à jour le profil</Text>

                    <View style={parametresStyle.updateEmailView}>

                        <View style={parametresStyle.photoUpdateProfilView}>
                            <Image style={parametresStyle.photoUpdateProfil} source={require('../../../assets/img/photo_default.png')} />
                            <Image style={parametresStyle.addUpdatePhotoProfil} source={require('../../../assets/img/add.png')} />
                        </View>

                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Nom d'utilisateur</Text>
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(username) => this.setState({ username })} />

                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Nom</Text>
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(nom) => this.setState({ nom })} />

                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Prénom</Text>
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} onChangeText={(prenom) => this.setState({ prenom })} />

                        <Button onPress={() => { }} title="Valider" buttonStyle={[buttonStyle.connexion, parametresStyle.btnUpdate]} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                    </View>
                </View>
            </View>
        );
    }
}