import React from 'react';
import { View, Text } from 'react-native';
import { appStyle } from '../../styles/styles';

export default class ClassementScreen extends React.Component {
    render() {
        return (
            <View style={appStyle.body}>
                <Text style={{ color: 'white' }}>Classement</Text>
            </View>
        );
    }
}