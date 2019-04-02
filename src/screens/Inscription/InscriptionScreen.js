import React from 'react';
import { View, Text } from 'react-native';
import { appStyle } from '../../styles/styles';

export default class InscriptionScreen extends React.Component {
    render() {
        return (
            <View>
                <Text style={[appStyle.customFont, { color: 'white'}]}>Inscription screen</Text>
            </View>
        );
    }
}