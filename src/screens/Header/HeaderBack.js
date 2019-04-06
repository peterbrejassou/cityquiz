import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { appStyle, headerStyle } from '../../styles/styles';

export default class HeaderBack extends React.Component {
    render() {
        return (
            <View style={[headerStyle.headerSimpleMainView, headerStyle.headerBack]}>   
                <TouchableOpacity style={headerStyle.headerSimpleBtnMenuTouchable} onPress={() => { this.props.navigation.goBack() }}>
                    <Image style={headerStyle.btnBack} source={require('../../../assets/img/back.png')}></Image>
                </TouchableOpacity>       
                <Text style={[appStyle.customFont, headerStyle.title]}>{this.props.title}</Text>
            </View>
        );
    }
}