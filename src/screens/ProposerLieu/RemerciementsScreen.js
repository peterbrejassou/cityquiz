import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { appStyle, buttonStyle, finishStyle, winStyle, looseStyle } from '../../styles/styles';

class RemerciementsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pointsGagnes: 500,
            piecesGagnees: 100
        }
    }

    // Fonction de mise à jour des points et des pièces de l'utilisateur puis redirection vers le menu
    _recompenseUserAndNavigate(){
        this.props.dispatch({ type: 'UPDATE_POINTS_USER', value: this.state.pointsGagnes });
        this.props.dispatch({ type: 'UPDATE_PIECES_USER', value: this.state.piecesGagnees });
        this.props.navigation.push("Menu");
    }

    render() {
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <View style={finishStyle.firstView}>
                    <Image source={require("../../../assets/img/happy.png")} style={finishStyle.img} />
                </View>

                <View style={finishStyle.secondView}>
                    <Text style={[appStyle.customFont, finishStyle.msg]}>Merci !</Text>
                    <Text style={[appStyle.customFont, looseStyle.text]}>Grâce à toi, d'autres globetrotter vont pouvoir s'entrainer :)</Text>
                    <Text style={[appStyle.customFont, finishStyle.pointsText]}>+ {this.state.pointsGagnes} points</Text>
                    <View style={winStyle.piecesView}>
                        <Text style={[appStyle.customFont, winStyle.piecesText]}>+ {this.state.piecesGagnees}</Text>
                        <Image style={winStyle.piecesImg} source={(require("../../../assets/img/coins.png"))} />
                    </View>
                </View>

                <View style={finishStyle.thirdView}>
                    <Button onPress={() => this._recompenseUserAndNavigate()} title="Retour au menu" buttonStyle={[buttonStyle.connexion, looseStyle.buttonNotFirst]} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        niveaux: state.dataReducer.niveaux,
        userConnected: state.userConnectedReducer.userConnected
    };
}
export default connect(mapStateToProps)(RemerciementsScreen);