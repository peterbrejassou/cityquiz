import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { appStyle, headerStyle } from '../../styles/styles';

export default class Header extends React.Component {
    render() {
        return (
            <View style={headerStyle.headerSimpleMainView}>   
                <TouchableOpacity style={headerStyle.headerSimpleBtnMenuTouchable} onPress={() => { this.props.navigation.push('Menu') }}>
                    <Image style={headerStyle.btnMenu} source={require('../../../assets/img/menu.png')}></Image>
                </TouchableOpacity>       
                <Text style={[appStyle.customFont, headerStyle.title]}>{this.props.title}</Text>
            </View>
        );
    }
}