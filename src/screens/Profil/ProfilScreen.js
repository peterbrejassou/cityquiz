import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../Header/Header';
import { appStyle, profilStyle, menuStyle, headerStyle } from '../../styles/styles';

var imgPath = '../../../assets/img/';

export default class ProfilScreen extends React.Component {
    render() {
        return (
            <View style={[appStyle.body, appStyle.padding, appStyle.mainView]}>
                <Header title="Profil" navigation={this.props.navigation} />

                <View style={profilStyle.firstSection}>
                    <Image source={require(imgPath + 'users/john_doe.jpg')} style={menuStyle.imgUser} />
                    <Text style={[menuStyle.whiteText, { fontSize: 32 }]}>John Doe</Text>
                    <Text style={[menuStyle.whiteText, menuStyle.idUser]}>@johndoe</Text>
                </View>

                <View style={profilStyle.secondSection}>
                    <Text style={menuStyle.whiteText}>12350 points</Text>
                    <View style={profilStyle.viewCoins}>
                        <Text style={headerStyle.coinsText}>120</Text>
                        <Image style={headerStyle.coinsImg} source={require(imgPath + 'coins.png')}></Image>
                    </View>
                </View>

                <View style={profilStyle.thirdSection}>
                    <Text style={profilStyle.statsTitle}>Statistiques de jeu</Text>
                    <View>
                        <View style={profilStyle.row}>
                            <View style={profilStyle.col}>
                                <Text style={profilStyle.stat}>3h42</Text>
                                <Text style={profilStyle.textStat}>Temps passé</Text>
                            </View>
                            <View style={profilStyle.col}>
                                <Text style={profilStyle.stat}>125</Text>
                                <Text style={profilStyle.textStat}>Pièces gagnées</Text>
                            </View>
                        </View>

                        <View style={profilStyle.row}>
                            <View style={profilStyle.col}>
                                <Text style={profilStyle.stat}>28</Text>
                                <Text style={profilStyle.textStat}>Lieux découverts</Text>
                            </View>
                            <View style={profilStyle.col}>
                                <Text style={profilStyle.stat}>15</Text>
                                <Text style={profilStyle.textStat}>Indices utilisés</Text>
                            </View>
                        </View>

                        <View style={profilStyle.row}>
                            <View style={profilStyle.col}>
                                <Text style={profilStyle.stat}>12</Text>
                                <Text style={profilStyle.textStat}>Badges débloqués</Text>
                            </View>
                            <View style={profilStyle.col}>
                                <Text style={profilStyle.stat}>3</Text>
                                <Text style={profilStyle.textStat}>Lieux proposés</Text>
                            </View>
                        </View>
                    </View>
                    
                </View>    
            </View>
        );
    }
}