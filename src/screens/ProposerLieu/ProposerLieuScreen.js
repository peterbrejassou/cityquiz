import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import HeaderHelp from '../Header/HeaderHelp';
import { appStyle, loginStyle, inputStyle, proposerLieuStyle, buttonStyle } from '../../styles/styles';

export default class ProposerLieuScreen extends React.Component {
    render() {
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderHelp title="Proposer un lieu" navigation={this.props.navigation} />
                
                <ScrollView showsVerticalScrollIndicator={false} style={proposerLieuStyle.mainView}>
                    <TouchableOpacity style={proposerLieuStyle.addTouchable} onPress={() => {}}>
                        <Image style={proposerLieuStyle.addLogo} source={require('../../../assets/img/add.png')} />
                    </TouchableOpacity>

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Nom du lieu</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(lieu) => this.setState({ lieu })} />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Question</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(question) => this.setState({ question })} />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Autre réponse 1</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(autreRep1) => this.setState({ autreRep1 })} />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Autre réponse 2</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(autreRep2) => this.setState({ autreRep2 })} />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Autre réponse 3</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(autreRep3) => this.setState({ autreRep3 })} />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Description</Text>
                    <TextInput 
                        multiline={true}
                        numberOfLines={7} 
                        style={[appStyle.customFont, inputStyle.input, proposerLieuStyle.inputs]} 
                        onChangeText={(description) => this.setState({ description })} 
                    />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Indice</Text>
                    <TextInput 
                        multiline={true}
                        numberOfLines={7}
                        style={[appStyle.customFont, inputStyle.input, proposerLieuStyle.inputs]} 
                        onChangeText={(indice) => this.setState({ indice })} 
                    />

                    <Button onPress={() => {}} title="Envoyer" buttonStyle={[buttonStyle.connexion, proposerLieuStyle.btnEnvoyer]} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                </ScrollView>
            </View>
        );
    }
}