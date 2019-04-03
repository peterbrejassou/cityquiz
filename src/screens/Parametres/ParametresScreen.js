import React from 'react';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';
import Header from '../Header/Header';
import { appStyle, parametresStyle } from '../../styles/styles';

export default class ParametresScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            notificationSwitchValue: false,
            darkThemeSwitchValue: true
        }
    }

    _toggleSwitchNotification(){
        this.setState({ notificationSwitchValue: !this.state.notificationSwitchValue});
    }

    _toggleSwitchTheme() {
        this.setState({ darkThemeSwitchValue: !this.state.darkThemeSwitchValue });
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
                        <TouchableOpacity style={parametresStyle.buttons} onPress={() => this.props.navigation.navigate('UpdateProfil')}>
                            <Image style={parametresStyle.logoButtons}source={require('../../../assets/img/profil.png')}/>
                            <Text style={parametresStyle.textButton}>Modifier le profil</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={parametresStyle.buttons} onPress={() => this.props.navigation.navigate('UpdateEmail')}>
                            <Image style={parametresStyle.logoButtons} source={require('../../../assets/img/mail.png')} />
                            <Text style={parametresStyle.textButton}>Modifier l'adresse email</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={parametresStyle.buttons} onPress={() => this.props.navigation.navigate('UpdatePassword')}>
                            <Image style={parametresStyle.logoButtons} source={require('../../../assets/img/key.png')} />
                            <Text style={parametresStyle.textButton}>Modifier le mot de passe</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={parametresStyle.thirdView}>
                    <Text style={parametresStyle.deleteCompte}>Supprimer le compte</Text>
                </View>
            </View>
        );
    }
}