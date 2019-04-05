import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Picker } from 'react-native';
import { Button } from 'react-native-elements';
import HeaderHelp from '../Header/HeaderHelp';
import { appStyle, loginStyle, inputStyle, proposerLieuStyle, buttonStyle } from '../../styles/styles';

export default class ProposerLieuScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lieuInput: null,
            questionInput: null,
            difficulteInput: null,
            autreRep1Input: null,
            autreRep2Input: null,
            autreRep3Input: null,
            descriptionInput: null,
            indiceInput: null
        }
    }

    render() {
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderHelp title="Proposer un lieu" navigation={this.props.navigation} />
                
                <ScrollView showsVerticalScrollIndicator={false} style={proposerLieuStyle.mainView}>
                    <TouchableOpacity style={proposerLieuStyle.addTouchable} onPress={() => {}}>
                        <Image style={proposerLieuStyle.addLogo} source={require('../../../assets/img/add.png')} />
                    </TouchableOpacity>

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Nom du lieu</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(lieuInput) => this.setState({ lieuInput })} />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Question</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(questionInput) => this.setState({ questionInput })} />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Difficulté</Text>
                    <View style={proposerLieuStyle.pickerView}>
                        <Picker style={[appStyle.customFont, proposerLieuStyle.picker]} itemStyle={{fontSize: 25}} selectedValue={this.state.difficulteInput} onValueChange={(difficulteInput) => this.setState({ difficulteInput })}>
                            <Picker.Item label="Facile" value={1} />
                            <Picker.Item label="Moyen" value={2} />
                            <Picker.Item label="Difficile" value={3} />
                        </Picker>
                    </View>

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Autre réponse 1</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(autreRep1Input) => this.setState({ autreRep1Input })} />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Autre réponse 2</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(autreRep2Input) => this.setState({ autreRep2Input })} />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Autre réponse 3</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(autreRep3Input) => this.setState({ autreRep3Input })} />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Description</Text>
                    <TextInput 
                        multiline={true}
                        numberOfLines={7} 
                        style={[appStyle.customFont, inputStyle.input, proposerLieuStyle.inputs]} 
                        onChangeText={(descriptionInput) => this.setState({ descriptionInput })} 
                    />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Indice</Text>
                    <TextInput 
                        multiline={true}
                        numberOfLines={7}
                        style={[appStyle.customFont, inputStyle.input, proposerLieuStyle.inputs]} 
                        onChangeText={(indiceInput) => this.setState({ indiceInput })} 
                    />

                    <Button onPress={() => {}} title="Envoyer" buttonStyle={[buttonStyle.connexion, proposerLieuStyle.btnEnvoyer]} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                </ScrollView>
            </View>
        );
    }
}