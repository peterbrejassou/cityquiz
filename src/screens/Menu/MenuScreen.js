import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { appStyle, menuStyle } from '../../styles/styles';
import MenuItem from './MenuItem';
import {menuList} from './MenuList';

var imgPath = '../../../assets/img/';

class MenuScreen extends React.Component {

    constructor(props){
        super(props);
    }

    // Fonction d'affichage de l'image en fonction de son type (nécessite un require ou un uri)
    _displayImageAfterTypeCheck() {
        // Si l'image est de type number (require)
        if (typeof (this.props.userConnected.photo) == "number") {
            return <Image style={menuStyle.imgUser} source={this.props.userConnected.photo} />
        // Si l'image est de type string (image importé avec uri)
        } else if (typeof (this.props.userConnected.photo) == "string") {
            return <Image style={menuStyle.imgUser} source={{ uri: this.props.userConnected.photo }} />;
        }
    }

    // Fonction de déconnexion de l'utilisateur
    _deconnexion(){      
        this.props.dispatch({ type: 'DELOG_USER'});
        this.props.navigation.push('Login');
    }

    render() {
        // Parcours de la liste des menu
        var items = menuList.map((item) => {
            return <MenuItem key={item.title} title={item.title} logo={item.logo} screen={item.screen} navigation={this.props.navigation}></MenuItem>
        });

        return (
            <View style={appStyle.body}>
                <View style={[appStyle.padding, appStyle.mainView]}>
                    <View style={menuStyle.firstSection}>
                        <TouchableOpacity
                        onPress={() => { this.props.navigation.goBack() }}>
                            <Image source={require(imgPath + 'cross.png')} style={menuStyle.cross} />
                        </TouchableOpacity>
                    </View>

                    <View style={menuStyle.secondSection}>
                        {this._displayImageAfterTypeCheck()}
                        <Text style={[appStyle.customFont, menuStyle.whiteText, { fontSize: 28 }]}>{this.props.userConnected.prenom} {this.props.userConnected.nom}</Text>
                        <Text style={[appStyle.customFont, menuStyle.whiteText, menuStyle.idUser]}>@{this.props.userConnected.username}</Text>
                    </View>

                    <View style={menuStyle.thirdSection}>
                       {items}
                    </View>
                </View>

                <View style={menuStyle.fourthSection}>
                    <TouchableOpacity style={menuStyle.bottomButtons} onPress={() => this.props.navigation.push('Parametres')}>
                        <Image
                            style={menuStyle.bottomLogos}
                            source={require(imgPath + 'parametres.png')}
                        />
                        <Text style={[appStyle.customFont, menuStyle.bottomTexts]}>Paramètres</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={menuStyle.bottomButtons} onPress={() => this._deconnexion()}>
                        <Image
                            style={menuStyle.bottomLogos}
                            source={require(imgPath + 'logout.png')}
                        />
                        <Text style={[appStyle.customFont, menuStyle.bottomTexts]}>Déconnexion</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        userConnected: state.userConnectedReducer.userConnected
    }
}
export default connect(mapStateToProps)(MenuScreen);