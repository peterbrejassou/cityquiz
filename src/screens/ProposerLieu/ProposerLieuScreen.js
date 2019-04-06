import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Picker, ImageBackground } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Button } from 'react-native-elements';
import HeaderHelp from '../Header/HeaderHelp';
import { appStyle, loginStyle, inputStyle, proposerLieuStyle, buttonStyle } from '../../styles/styles';

class ProposerLieuScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            villeInput: null,
            newVilleInput: null,
            difficulteInput: null,
            questionInput: null,
            reponse1Input: null,
            reponse2Input: null,
            reponse3Input: null,
            reponse4Input: null,
            bonneReponseInput: null,
            indiceInput: null,
            descriptionInput: null,

            isVilleInputSelected: true,
            isNewVilleInputFill: true,
            isDifficulteInputFill: true,
            isQuestionInputFill: true,
            isReponse1InputFill: true,
            isReponse2InputFill: true,
            isReponse3InputFill: true,
            isReponse4InputFill: true,
            isBonneReponseInputSelected: true,
            isIndiceInputFill: true,
            isDescriptionInputFill: true
        }
    }

    _addImageNiveau(){
        const options = {
            title: 'Ajouter une image',
            takePhotoButtonTitle: 'Prendre une photo...',
            chooseFromLibraryButtonTitle: 'Choisir une image depuis la galerie...',
            cancelButtonTitle: 'Annuler',
            noData: true
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log(response);
            if (response.uri) {
                this.setState({ image: response });        
            }
        });
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

    _checkFormNewVilleValid() {
        // Si l'ulisateur a sélectionne "nouvelle ville" dans le picker ville
        if (this.state.villeInput === "add_new_city") {
            // Si le nom de la ville ou la difficulté n'ont pas été entrés
            if (this.state.newVilleInput === null || this.state.newVilleInput === "" || this.state.difficulteInput === 0) {
                // Si le nom de la nouvelle ville n'a pas été entré
                if (this.state.newVilleInput === null || this.state.newVilleInput === "") {
                    this.setState({ isNewVilleInputFill: false }, () => {
                        this._addNewLieu();
                    });
                } else {
                    this.setState({ isNewVilleInputFill: true }, () => {
                        this._addNewLieu();
                    });
                }

                // Si la difficulté n'a pas été sélectionnée
                if (this.state.difficulteInput === 0) {
                    this.setState({ isDifficulteInputFill: false }, () => {
                        this._addNewLieu();
                    });
                } else {
                    this.setState({ isDifficulteInputFill: true }, () => {
                        this._addNewLieu();
                    });
                }
            }
            else {
                this.setState({ isNewVilleInputFill: true, isDifficulteInputFill: true });
                this._addNewLieu();
            }
        } else {
            this._addNewLieu();
        }
    }

    _addNewLieu() {
        // Si un des champs est vide ou a une valeur par défaut
        if (this.state.villeInput === 0 || (this.state.questionInput === null || this.state.questionInput === "") || (this.state.reponse1Input === null || this.state.reponse1Input === "") || (this.state.reponse2Input === null || this.state.reponse2Input === "") || (this.state.reponse3Input === null || this.state.reponse3Input === "") || (this.state.reponse4Input === null || this.state.reponse4Input === "") || this.state.bonneReponseInput === "default" || (this.state.indiceInput === null || this.state.indiceInput === "") || (this.state.descriptionInput === null || this.state.descriptionInput === "")) {
            // Si la ville n'a pas été sélecttionnée
            if (this.state.villeInput === 0) {
                this.setState({ isVilleInputSelected: false });
            } else {
                this.setState({ isVilleInputSelected: true });
            }
            // Si la question n'a pas été entrée
            if (this.state.questionInput === null || this.state.questionInput === "") {
                this.setState({ isQuestionInputFill: false });
            } else {
                this.setState({ isQuestionInputFill: true });
            }
            // Si la réponse 1 n'a pas été entrée
            if (this.state.reponse1Input === null || this.state.reponse1Input === "") {
                this.setState({ isReponse1InputFill: false });
            } else {
                this.setState({ isReponse1InputFill: true });
            }
            // Si la réponse 2 n'a pas été entrée
            if (this.state.reponse2Input === null || this.state.reponse2Input === "") {
                this.setState({ isReponse2InputFill: false });
            } else {
                this.setState({ isReponse2InputFill: true });
            }
            // Si la réponse 3 n'a pas été entrée
            if (this.state.reponse3Input === null || this.state.reponse3Input === "") {
                this.setState({ isReponse3InputFill: false });
            } else {
                this.setState({ isReponse3InputFill: true });
            }
            // Si la réponse 4 n'a pas été entrée
            if (this.state.reponse4Input === null || this.state.reponse4Input === "") {
                this.setState({ isReponse4InputFill: false });
            } else {
                this.setState({ isReponse4InputFill: true });
            }
            // Si la la bonne réponse n'a pas été sélectionnée
            if (this.state.bonneReponseInput === "default") {
                this.setState({ isBonneReponseInputSelected: false });
            } else {
                this.setState({ isBonneReponseInputSelected: true });
            }
            // Si l'indice n'a pas été entré
            if (this.state.indiceInput === null || this.state.indiceInput === "") {
                this.setState({ isIndiceInputFill: false });
            } else {
                this.setState({ isIndiceInputFill: true });
            }
            // Si la description n'a pas été entrée
            if (this.state.descriptionInput === null || this.state.descriptionInput === "") {
                this.setState({ isDescriptionInputFill: false });
            } else {
                this.setState({ isDescriptionInputFill: true });
            }

            // Si tout est correct et bien rempli
        } else {
            // Si le formulaire nouvelle ville est validé
            if (this.state.isNewVilleInputFill && this.state.isDescriptionInputFill) {
                // Si l'utilisateur ne veut pas créér de nouveau niveau lié à une nouvelle ville
                if (this.state.villeInput !== "add_new_city") {
                    // On récupère l'objet niveau correspondant au choix de l'utilisateur depuis le picker
                    var niveauRecupere = this.props.niveaux.find((niveau) => {
                        return niveau.nom === this.state.villeInput;
                    });

                    // On créé notre objet newLieu
                    var newLieu = {
                        numero: niveauRecupere.questions.length + 1,
                        intitule: this.state.questionInput,
                        image: this.state.image.uri,
                        reponses: [
                            this.state.reponse1Input,
                            this.state.reponse2Input,
                            this.state.reponse3Input,
                            this.state.reponse4Input,
                        ],
                        bonneReponse: this.state.bonneReponseInput,
                        indice: this.state.indiceInput,
                        explication: this.state.descriptionInput,
                        valeur: 20
                    };

                    // On passe notre objet au store redux pour le stocker
                    this.props.dispatch({ type: 'ADD_NEW_LIEU', niveau: niveauRecupere, lieu: newLieu });

                    // Si l'utilisateur veut créér un nouveau niveau lié à une nouvelle ville
                } else {
                    // On créé notre objet newNiveau
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
                                image: this.state.image.uri,
                                reponses: [
                                    this.state.reponse1Input,
                                    this.state.reponse2Input,
                                    this.state.reponse3Input,
                                    this.state.reponse4Input,
                                ],
                                bonneReponse: this.state.bonneReponseInput,
                                indice: this.state.indiceInput,
                                explication: this.state.descriptionInput,
                                valeur: 20
                            }
                        ]
                    };

                    // On passe notre objet au store redux pour le stocker
                    this.props.dispatch({ type: 'ADD_NEW_NIVEAU', value: newNiveau });
                }
                // On redirige l'utilisateur vers la page de remerciements
                this.props.navigation.navigate("Remerciements");
            } else {
                console.log("pas validé");
            }
        }
    }  

    render() {
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderHelp title="Proposer un lieu" navigation={this.props.navigation} />
                
                <ScrollView showsVerticalScrollIndicator={false} style={proposerLieuStyle.mainView}>
                    <TouchableOpacity onPress={() => this._addImageNiveau()}>
                        {!this.state.image && (
                            <ImageBackground style={proposerLieuStyle.imageNiveau} imageStyle={{ borderRadius: 10 }} source={require('../../../assets/img/image_niveau_default.png')}>
                                <Image style={proposerLieuStyle.addLogo} source={require('../../../assets/img/add.png')} />
                            </ImageBackground>
                        )}
                        
                        {this.state.image && (
                            <ImageBackground style={proposerLieuStyle.imageNiveau} imageStyle={{ borderRadius: 10 }} source={{ uri: this.state.image.uri }}>
                                <Image style={proposerLieuStyle.editLogo} source={require('../../../assets/img/edit.png')} />
                            </ImageBackground>
                        )}
                    </TouchableOpacity>

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Ville concernée</Text>
                    {this._createPickerItemsVilles()}
                    <Text style={[loginStyle.badOrEmptyLogs, this.state.isVilleInputSelected ? {display: 'none'} : {display: 'flex'}]}>Veuillez sélectionner la ville</Text>

                    <View style={this.state.villeInput === "add_new_city" ? { display: 'flex' } : { display: 'none' }}>
                        <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Nom de la nouvelle ville</Text>
                        <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(newVilleInput) => this.setState({ newVilleInput })} />
                        <Text style={[loginStyle.badOrEmptyLogs, this.state.isNewVilleInputFill ? { display: 'none' } : { display: 'flex' }]}>Veuillez entrer le nom de la nouvelle ville</Text>
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
                        <Text style={[loginStyle.badOrEmptyLogs, this.state.isDifficulteInputFill ? { display: 'none' } : { display: 'flex' }]}>Veuillez sélectionner la difficulté</Text>
                    </View>

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Question</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(questionInput) => this.setState({ questionInput })} />
                    <Text style={[loginStyle.badOrEmptyLogs, this.state.isQuestionInputFill ? { display: 'none' } : { display: 'flex' }]}>Veuillez entrer la question</Text>

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Réponse 1</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(reponse1Input) => this.setState({ reponse1Input })} />
                    <Text style={[loginStyle.badOrEmptyLogs, this.state.isReponse1InputFill ? { display: 'none' } : { display: 'flex' }]}>Veuillez entrer la réponse 1</Text>

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Réponse 2</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(reponse2Input) => this.setState({ reponse2Input })} />
                    <Text style={[loginStyle.badOrEmptyLogs, this.state.isReponse2InputFill ? { display: 'none' } : { display: 'flex' }]}>Veuillez entrer la réponse 2</Text>

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Réponse 3</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(reponse3Input) => this.setState({ reponse3Input })} />
                    <Text style={[loginStyle.badOrEmptyLogs, this.state.isReponse3InputFill ? { display: 'none' } : { display: 'flex' }]}>Veuillez entrer la réponse 3</Text>

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Réponse 4</Text>
                    <TextInput style={[appStyle.customFont, inputStyle.input]} onChangeText={(reponse4Input) => this.setState({ reponse4Input })} />
                    <Text style={[loginStyle.badOrEmptyLogs, this.state.isReponse4InputFill ? { display: 'none' } : { display: 'flex' }]}>Veuillez entrer la réponse 4</Text>

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
                    <Text style={[loginStyle.badOrEmptyLogs, this.state.isBonneReponseInputSelected ? { display: 'none' } : { display: 'flex' }]}>Veuillez sélectionner la bonne réponse</Text>

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Indice</Text>
                    <TextInput 
                        multiline={true}
                        numberOfLines={7}
                        style={[appStyle.customFont, inputStyle.input, proposerLieuStyle.inputs, proposerLieuStyle.inputsMultiline]} 
                        onChangeText={(indiceInput) => this.setState({ indiceInput })} 
                    />
                    <Text style={[loginStyle.badOrEmptyLogs, this.state.isIndiceInputFill ? { display: 'none' } : { display: 'flex' }]}>Veuillez entrer l'indice</Text>

                    <Text style={[appStyle.customFont, loginStyle.inputTitles, proposerLieuStyle.inputsTitle]}>Description du lieu</Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={7}
                        style={[appStyle.customFont, inputStyle.input, proposerLieuStyle.inputs, proposerLieuStyle.inputsMultiline]}
                        onChangeText={(descriptionInput) => this.setState({ descriptionInput })}
                    />
                    <Text style={[loginStyle.badOrEmptyLogs, this.state.isDescriptionInputFill ? { display: 'none' } : { display: 'flex' }]}>Veuillez entrer la description</Text>

                    <Button onPress={() => this._checkFormNewVilleValid()} title="Envoyer" buttonStyle={[buttonStyle.connexion, proposerLieuStyle.btnEnvoyer]} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
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