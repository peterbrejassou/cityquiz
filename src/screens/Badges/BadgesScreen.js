import React from 'react';
import { View, Text } from 'react-native';
import { appStyle } from '../../styles/styles';

export default class BadgesScreen extends React.Component {
    render() {
        return (
            <View style={appStyle.body}>
                <Text style={{ color: 'white' }}>Badges</Text>
            </View>
        );
    }
}