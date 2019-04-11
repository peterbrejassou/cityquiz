import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../Header/Header';
import { appStyle, badgeStyle } from '../../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';

export default class BadgesScreen extends React.Component {

    _makeBadgeView(title, text){
        return (
            <View style={badgeStyle.mainView}>
                <View style={badgeStyle.leftView}>
                    <Image style={badgeStyle.image} source={require('../../../assets/img/trophy.png')} />
                </View>

                <View style={badgeStyle.rightView}>
                    <Text style={badgeStyle.title}>{title}</Text>
                    <Text style={[appStyle.customFont, badgeStyle.text]}>{text}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <Header title="Badges" navigation={this.props.navigation}></Header>
                <View style={{height: 30}}></View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this._makeBadgeView('Globetrotter', 'Vous avez découvert 10 endroits différents')}
                    {this._makeBadgeView('Citadin', 'Vous avez découvert 12 villes différentes')}
                    {this._makeBadgeView('Historien', 'Vous avez découvert 20 monuments différents')}
                    {this._makeBadgeView('Historien', 'Vous avez découvert 20 monuments différents')}
                    {this._makeBadgeView('Historien', 'Vous avez découvert 20 monuments différents')}
                    {this._makeBadgeView('Historien', 'Vous avez découvert 20 monuments différents')}
                    {this._makeBadgeView('Historien', 'Vous avez découvert 20 monuments différents')}
                    {this._makeBadgeView('Historien', 'Vous avez découvert 20 monuments différents')}
                    {this._makeBadgeView('Historien', 'Vous avez découvert 20 monuments différents')}
                </ScrollView>
            </View>
        );
    }
}