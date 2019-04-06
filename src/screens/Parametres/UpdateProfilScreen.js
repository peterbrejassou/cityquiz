import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Button } from 'react-native-elements';
import HeaderBack from '../Header/HeaderBack';
import { appStyle, inputStyle, loginStyle, buttonStyle, parametresStyle } from '../../styles/styles';

class UpdateProfilScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            photoUser: this.props.userConnected.photo,
            usernameUser: this.props.userConnected.username,
            nomUser: this.props.userConnected.nom,
            prenomUser: this.props.userConnected.prenom
        }
    }

    _displayImageAfterTypeCheck() {
        if (typeof (this.state.photoUser) == "number") {
            return <Image style={parametresStyle.photoUpdateProfil} source={this.state.photoUser} />;
        } else if (typeof (this.state.photoUser) == "string") {
            return <Image style={parametresStyle.photoUpdateProfil} source={{ uri: this.state.photoUser }} />;
        }
    }

    _changePhotoUser() {
        const options = {
            title: 'Ajouter une image',
            takePhotoButtonTitle: 'Prendre une photo...',
            chooseFromLibraryButtonTitle: 'Choisir une image depuis la galerie...',
            cancelButtonTitle: 'Annuler',
            noData: true
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.uri) {
                this.setState({ photoUser: response.uri });
            }
        });
    }

    _updateProfileUser(){
        this.props.dispatch({ 
            type: 'UPDATE_PROFILE_USER',
            photo: this.state.photoUser, 
            username: this.state.usernameUser,
            nom: this.state.nomUser, 
            prenom: this.state.prenomUser 
        });

        // On redirige vers le menu
        this.props.navigation.push('Menu');
    }

    render() {
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderBack title="Paramètres" navigation={this.props.navigation} />

                <View style={parametresStyle.firstView}>
                    <Text style={[appStyle.customFont, parametresStyle.titleUpdate]}>Mettre à jour le profil</Text>

                    <View style={parametresStyle.updateEmailView}>

                        <TouchableOpacity style={parametresStyle.photoUpdateProfilView} onPress={() => this._changePhotoUser()}>
                            {this._displayImageAfterTypeCheck()}
                            <Image style={parametresStyle.addUpdatePhotoProfil} source={require('../../../assets/img/edit.png')} />
                        </TouchableOpacity>

                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Nom d'utilisateur</Text>
                        <TextInput autoCapitalize="none" style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} value={this.state.usernameUser} onChangeText={(usernameUser) => this.setState({ usernameUser })} onSubmitEditing={() => this.nomTextInput.focus()} />

                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Nom</Text>
                        <TextInput style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} value={this.state.nomUser} onChangeText={(nomUser) => this.setState({ nomUser })} ref={(input) => this.nomTextInput = input} onSubmitEditing={() => this.prenomTextInput.focus()} />

                        <Text style={[appStyle.customFont, loginStyle.inputTitles, parametresStyle.inputTitle]}>Prénom</Text>
                        <TextInput style={[appStyle.customFont, inputStyle.input, parametresStyle.input]} value={this.state.prenomUser} onChangeText={(prenomUser) => this.setState({ prenomUser })} ref={(input) => this.prenomTextInput = input} onSubmitEditing={() => this._updateProfileUser()} />

                        <Button onPress={() => this._updateProfileUser()} title="Valider" buttonStyle={[buttonStyle.connexion, parametresStyle.btnUpdate]} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.dataReducer.users,
        userConnected: state.userConnectedReducer.userConnected
    };
}
export default connect(mapStateToProps)(UpdateProfilScreen);