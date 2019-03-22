import React from 'react';
import { View, Text, Image } from 'react-native';
import { headerStyle } from '../../styles/styles';

export default class Header extends React.Component {
    render() {
        return (
            <View style={headerStyle.mainView}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Menu') }}>
                    <Image style={headerStyle.btnMenu} source={require('../../../assets/img/menu.png')}></Image>
                </TouchableOpacity>
                <Text style={headerStyle.title}>{this.props.title}</Text>
            </View>
        );
    }
}