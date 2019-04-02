import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { appStyle, menuItemStyle } from '../../styles/styles';

export default class MenuItem extends React.Component {

    render() {
        return (
            <View style={menuItemStyle.itemView}>
                <TouchableOpacity 
                    onPress={() => {this.props.navigation.navigate(this.props.screen)}} 
                    style={{flexDirection: 'row'}}>

                    <Image source={this.props.logo} style={menuItemStyle.icon} />
                    <Text style={[appStyle.customFont, menuItemStyle.text]}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}