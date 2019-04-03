import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { appStyle, headerStyle, helpScreenStyle } from '../../styles/styles';

export default class HeaderHelp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            helpScreenDisplayed: false,
        }
    }

    _displayHelpScreen() {
        this.setState({ helpScreenDisplayed: !this.state.helpScreenDisplayed });
    }

    render() {
        return (
            <View style={headerStyle.mainView}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Menu') }}>
                    <Image style={headerStyle.btnMenu} source={require('../../../assets/img/menu.png')} />
                </TouchableOpacity>
                
                <Text style={[appStyle.customFont, headerStyle.title]}>{this.props.title}</Text>

                <TouchableOpacity onPress={() => this._displayHelpScreen()}>
                    <Image style={headerStyle.help} source={require('../../../assets/img/help.png')} />
                </TouchableOpacity>

                {this.state.helpScreenDisplayed ?
                    <View style={helpScreenStyle.mainView}>
                        <TouchableOpacity onPress={() => this._displayHelpScreen()} style={helpScreenStyle.viewCross}>
                            <Image style={helpScreenStyle.croix} source={require('../../../assets/img/cross.png')} />
                        </TouchableOpacity>
                        <View style={helpScreenStyle.viewContent}>
                            <Text style={helpScreenStyle.title}>Règles de publication</Text>
                            <Text style={helpScreenStyle.content}>Lorem ipsum</Text>
                        </View>
                    </View>
                : null}
            </View>
        );
    }
}