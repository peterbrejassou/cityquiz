import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import Header from '../Header/Header';
import { appStyle, profilStyle, menuStyle, headerStyle } from '../../styles/styles';

var imgPath = '../../../assets/img/';

class ProfilScreen extends React.Component {
    render() {
        return (
            <View style={[appStyle.body, appStyle.padding, appStyle.mainView]}>
                <Header title="Profil" navigation={this.props.navigation} />

                <View style={profilStyle.firstSection}>
                    <Image source={require(imgPath + 'users/john_doe.jpg')} style={menuStyle.imgUser} />
                    <Text style={[appStyle.customFont, menuStyle.whiteText, { fontSize: 32 }]}>{this.props.userConnected.prenom} {this.props.userConnected.nom}</Text>
                    <Text style={[appStyle.customFont, menuStyle.whiteText, menuStyle.idUser]}>@{this.props.userConnected.username}</Text>
                </View>

                <View style={profilStyle.secondSection}>
                    <Text style={[appStyle.customFont, menuStyle.whiteText]}>{this.props.userConnected.nbPoints} points</Text>
                    <View style={profilStyle.viewCoins}>
                        <Text style={[appStyle.customFont, headerStyle.coinsText]}>{this.props.userConnected.nbPieces}</Text>
                        <Image style={headerStyle.coinsImg} source={require(imgPath + 'coins.png')}></Image>
                    </View>
                </View>

                <View style={profilStyle.thirdSection}>
                    <Text style={[appStyle.customFont, profilStyle.statsTitle]}>Statistiques de jeu</Text>
                    <View>
                        <View style={profilStyle.row}>
                            <View style={profilStyle.col}>
                                <Text style={[appStyle.customFont, profilStyle.stat]}>3h42</Text>
                                <Text style={[appStyle.customFont, profilStyle.textStat]}>Temps de jeu global</Text>
                            </View>
                            <View style={profilStyle.col}>
                                <Text style={[appStyle.customFont, profilStyle.stat]}>125</Text>
                                <Text style={[appStyle.customFont, profilStyle.textStat]}>Pièces gagnées</Text>
                            </View>
                        </View>

                        <View style={profilStyle.row}>
                            <View style={profilStyle.col}>
                                <Text style={[appStyle.customFont, profilStyle.stat]}>28</Text>
                                <Text style={[appStyle.customFont, profilStyle.textStat]}>Lieux découverts</Text>
                            </View>
                            <View style={profilStyle.col}>
                                <Text style={[appStyle.customFont, profilStyle.stat]}>15</Text>
                                <Text style={[appStyle.customFont, profilStyle.textStat]}>Indices utilisés</Text>
                            </View>
                        </View>

                        <View style={profilStyle.row}>
                            <View style={profilStyle.col}>
                                <Text style={[appStyle.customFont, profilStyle.stat]}>12</Text>
                                <Text style={[appStyle.customFont, profilStyle.textStat]}>Badges débloqués</Text>
                            </View>
                            <View style={profilStyle.col}>
                                <Text style={[appStyle.customFont, profilStyle.stat]}>3</Text>
                                <Text style={[appStyle.customFont, profilStyle.textStat]}>Lieux proposés</Text>
                            </View>
                        </View>
                    </View>
                </View>    
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userConnected: state.userConnected
    }
}
export default connect(mapStateToProps)(ProfilScreen);