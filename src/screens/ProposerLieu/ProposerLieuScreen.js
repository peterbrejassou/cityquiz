import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Picker } from 'react-native';
import { Button } from 'react-native-elements';
import HeaderHelp from '../Header/HeaderHelp';
import { appStyle, loginStyle, inputStyle, proposerLieuStyle, buttonStyle } from '../../styles/styles';

class ProposerLieuScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            villeInput: null,
            newVilleInput: null,
            difficulteInput: null,
            questionInput: null,
            reponse1Input: null,
            reponse2Input: null,
            reponse3Input: null,
            reponse4Input: null,
            bonneReponseInput: null,
            descriptionInput: null,
            indiceInput: null
        }
    }

    _createPickerItemsVilles(){
        var items = this.props.niveaux.map((niveau) => {
            return <Picker.Item key={niveau.id} label={niveau.nom} value={niveau.nom} />
        });
        return (
            <View style={proposerLieuStyle.pickerView}>
                <Picker style={[appStyle.customFont, proposerLieuStyle.picker]} selectedValue={this.state.villeInput} onValueChange={(villeInput) => this.setState({ villeInput })}>
                    <Picker.Item label="Choix de la ville" value={0} />
                    {items}
                    <Picker.Item label="+ Nouvelle ville" value="add_new_city" />
                </Picker>
            </View>
        );
    }

    _addNewLieu(){
        if (this.state.newVilleInput !== null || this.state.newVilleInput !== ""){
            var newNiveau = {
                id: this.props.niveaux.length + 1,
                nom: this.state.newVilleInput,
                difficulte: this.state.difficulteInput,
                nbPieces: 50,
                locked: false,
                alreadyWon: false,
                questions: [
                    {
                        numero: 1,
                        intitule: this.state.questionInput,
                        image: "",
                        reponses: [
                            this.state.reponse1Input,
                            this.state.reponse2Input,
                            this.state.reponse3Input,
                            this.state.reponse4Input,
                        ],
                        bonneReponse: 1,
                        indice: this.state.indiceInput,
                        explication: this.state.descriptionInput,
                        valeur: 20
                    }
                ]
            };
        } else{
            /* var newLieu = {

            }; */
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

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Ville concernée</Text>
                    {this._createPickerItemsVilles()}

                    <View style={this.state.villeInput === "add_new_city" ? { display: 'flex' } : { display: 'none' }}>
                        <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Nom de la nouvelle ville</Text>
                        <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(newVilleInput) => this.setState({ newVilleInput })} />
                    </View>

                    <View style={this.state.villeInput === "add_new_city" ? { display: 'flex' } : { display: 'none' }}>
                        <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Difficulté</Text>
                        <View style={proposerLieuStyle.pickerView}>
                            <Picker style={[appStyle.customFont, proposerLieuStyle.picker]} selectedValue={this.state.difficulteInput} onValueChange={(difficulteInput) => this.setState({ difficulteInput })}>
                                <Picker.Item label="Choix de la difficulté" value={0} />
                                <Picker.Item label="Facile" value={1} />
                                <Picker.Item label="Moyen" value={2} />
                                <Picker.Item label="Difficile" value={3} />
                            </Picker>
                        </View>
                    </View>

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Question</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(questionInput) => this.setState({ questionInput })} />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Réponse 1</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(reponse1Input) => this.setState({ reponse1Input })} />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Réponse 2</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(reponse2Input) => this.setState({ reponse2Input })} />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Réponse 3</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(reponse3Input) => this.setState({ reponse3Input })} />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Réponse 4</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(reponse4Input) => this.setState({ reponse4Input })} />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Bonne réponse</Text>
                    <View style={proposerLieuStyle.pickerView}>
                        <Picker style={[appStyle.customFont, proposerLieuStyle.picker]} selectedValue={this.state.bonneReponseInput} onValueChange={(bonneReponseInput) => this.setState({ bonneReponseInput })}>
                            <Picker.Item label="Choix de la bonne réponse" value="default" />
                            <Picker.Item label="Réponse 1" value={0} />
                            <Picker.Item label="Réponse 2" value={1} />
                            <Picker.Item label="Réponse 3" value={2} />
                            <Picker.Item label="Réponse 4" value={3} />
                        </Picker>
                    </View>

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Indice</Text>
                    <TextInput 
                        multiline={true}
                        numberOfLines={7}
                        style={[appStyle.customFont, inputStyle.input, proposerLieuStyle.inputs, proposerLieuStyle.inputsMultiline]} 
                        onChangeText={(indiceInput) => this.setState({ indiceInput })} 
                    />

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Description du lieu</Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={7}
                        style={[appStyle.customFont, inputStyle.input, proposerLieuStyle.inputs, proposerLieuStyle.inputsMultiline]}
                        onChangeText={(descriptionInput) => this.setState({ descriptionInput })}
                    />

                    <Button onPress={() => this._addNewLieu()} title="Envoyer" buttonStyle={[buttonStyle.connexion, proposerLieuStyle.btnEnvoyer]} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        niveaux: state.dataReducer.niveaux
    };
}
export default connect(mapStateToProps)(ProposerLieuScreen);