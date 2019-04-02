import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { appStyle, headerStyle } from '../../styles/styles';

export default class HeaderCoins extends React.Component {
    render() {
        return (
            <View style={headerStyle.mainView}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Menu') }}>
                    <Image style={headerStyle.btnMenu} source={require('../../../assets/img/menu.png')}></Image>
                </TouchableOpacity>
                
                <Text style={[appStyle.customFont, headerStyle.title]}>{this.props.title}</Text>

                <View style={headerStyle.coinsView}>
                    <Text style={[appStyle.customFont, headerStyle.coinsText]}>120</Text>
                    <Image style={headerStyle.coinsImg} source={require('../../../assets/img/coins.png')}></Image>
                </View>
            </View>
        );
    }
}