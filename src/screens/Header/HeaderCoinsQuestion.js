import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { appStyle, headerStyle } from '../../styles/styles';

class HeaderCoinsQuestion extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={headerStyle.mainView}>
                <TouchableOpacity onPress={() => { this.props.navigation.push('Menu') }}>
                    <Image style={headerStyle.btnMenu} source={require('../../../assets/img/menu.png')}></Image>
                </TouchableOpacity>
                
                <View style={headerStyle.textView}>
                    <Text style={[appStyle.customFont, headerStyle.title]}>{this.props.title}</Text>
                    <Text style={[appStyle.customFont, headerStyle.nbQuestion]}>Question {this.props.questionNumber} / {this.props.nbQuestionsTotal}</Text>
                </View>

                <View style={headerStyle.coinsView}>
                    <Text style={[appStyle.customFont, headerStyle.coinsText]}>{this.props.userConnected.nbPieces}</Text>
                    <Image style={headerStyle.coinsImg} source={require('../../../assets/img/coins.png')}></Image>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userConnected: state.userConnectedReducer.userConnected
    };
}
export default connect(mapStateToProps)(HeaderCoinsQuestion);