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

    // Fonction d'affichage de la popup d'aide "Règles de publication"
    _displayHelpScreen() {
        this.setState({ helpScreenDisplayed: !this.state.helpScreenDisplayed });
    }

    render() {
        return (
            <View style={headerStyle.mainView}>
                <TouchableOpacity onPress={() => { this.props.navigation.push('Menu') }}>
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
                            <Text style={helpScreenStyle.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam porta sollicitudin. Donec malesuada tortor id tortor dictum auctor id nec urna. Phasellus tincidunt, sem quis mollis iaculis, dui felis volutpat erat, ut commodo quam enim nec sem. Donec vitae mi finibus, convallis risus condimentum, aliquam velit. Donec euismod nunc erat, eget consectetur est ultricies luctus. Aenean non dolor consectetur, placerat tellus in, semper ex. Vivamus rutrum in lectus quis congue. Integer nec ullamcorper nibh. Aliquam at ligula in odio feugiat aliquet. Nunc nec mi dui.</Text>
                        </View>
                    </View>
                : null}
            </View>
        );
    }
}