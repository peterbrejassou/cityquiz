import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';
import { Button } from 'react-native-elements';
import Header from '../Header/Header';
import { appStyle, parametresStyle, cardNiveauStyle } from '../../styles/styles';

class ParametresScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            notificationSwitchValue: false,
            darkThemeSwitchValue: true,
            popupDisplayed: false
        }
    }

    // Fonction liée au switch button notifications
    _toggleSwitchNotification(){
        this.setState({ notificationSwitchValue: !this.state.notificationSwitchValue});
    }

    // Fonction liée au switch button thème sombre
    _toggleSwitchTheme() {
        this.setState({ darkThemeSwitchValue: !this.state.darkThemeSwitchValue });
    }

    // Fonction permettant de supprimer le compte d'un utilisateur
    _deleteUser(){
        this.props.dispatch({ type: 'DELOG_USER' });
        this.props.dispatch({ type: 'DELETE_USER', currentUser: this.props.userConnected });
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <Header title="Paramètres" navigation={this.props.navigation} />

                <View style={parametresStyle.firstView}>
                    <Text style={[appStyle.customFont, parametresStyle.titleSection]}>Général</Text>
                    <View style={parametresStyle.sectionSwitch}>
                        <View style={parametresStyle.optionSwitch}>
                            <Text style={[appStyle.customFont, parametresStyle.titleOption]}>Activer les notifications</Text>
                            <Switch value={this.state.notificationSwitchValue} onValueChange={() => this._toggleSwitchNotification()} />
                        </View>
                        <View style={parametresStyle.optionSwitch2}>
                            <Text style={[appStyle.customFont, parametresStyle.titleOption]}>Thème foncé</Text>
                            <Switch value={this.state.darkThemeSwitchValue} onValueChange={() => this._toggleSwitchTheme()} />
                        </View>
                    </View>
                </View>

                <View style={parametresStyle.secondView}>
                    <Text style={[appStyle.customFont, parametresStyle.titleSection]}>Compte</Text>

                    <View>
                        <TouchableOpacity style={parametresStyle.buttons} onPress={() => this.props.navigation.push('UpdateProfil')}>
                            <Image style={parametresStyle.logoButtons}source={require('../../../assets/img/profil.png')}/>
                            <Text style={parametresStyle.textButton}>Modifier le profil</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={parametresStyle.buttons} onPress={() => this.props.navigation.push('UpdateEmail')}>
                            <Image style={parametresStyle.logoButtons} source={require('../../../assets/img/mail.png')} />
                            <Text style={parametresStyle.textButton}>Modifier l'adresse email</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={parametresStyle.buttons} onPress={() => this.props.navigation.push('UpdatePassword')}>
                            <Image style={parametresStyle.logoButtons} source={require('../../../assets/img/key.png')} />
                            <Text style={parametresStyle.textButton}>Modifier le mot de passe</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={parametresStyle.thirdView}>
                    <TouchableOpacity onPress={() => this.setState({ popupDisplayed: true })}>
                        <Text style={parametresStyle.deleteCompte}>Supprimer le compte</Text>
                    </TouchableOpacity>
                </View>
                


                {this.state.popupDisplayed && ( 
                    <View style={parametresStyle.popupMainView}>
                        <Text style={[parametresStyle.titlePopup]}>Êtes-vous sûr de vouloir supprimer votre compte ?</Text>
                        <View style={parametresStyle.popupButtons}>
                            <Button onPress={() => this._deleteUser()} title="Oui" buttonStyle={parametresStyle.btnOui} titleStyle={[appStyle.customFont, cardNiveauStyle.titleButton]} />
                            <Button onPress={() => this.setState({ popupDisplayed: false })} title="Non" buttonStyle={parametresStyle.btnNon} titleStyle={[appStyle.customFont, cardNiveauStyle.titleButton]} />
                        </View>
                    </View>
                )}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userConnected: state.userConnectedReducer.userConnected
    };
}
export default connect(mapStateToProps)(ParametresScreen);