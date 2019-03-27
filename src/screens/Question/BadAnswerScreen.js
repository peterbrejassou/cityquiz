import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Image, Button } from 'react-native-elements';
import HeaderCoinsQuestion from '../Header/HeaderCoinsQuestion';
import { appStyle, questionStyle } from '../../styles/styles';

export default class BadAnswerScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Bad Answer</Text> 
            </View>
        );
    }
}
