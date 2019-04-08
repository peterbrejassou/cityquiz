import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { appStyle, jouerStyle } from '../../styles/styles';
import HeaderCoins from '../Header/HeaderCoins';
import CardNiveau from '../Jouer/CardNiveau';

class JouerScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Parcours de la liste des niveaux puis création d'un CardNiveau pour chacun
        var niveauItems = this.props.niveaux.map((item) => {
            return <CardNiveau key={item.id} niveau={item} navigation={this.props.navigation} />
        });

        return (
            <View style={[appStyle.body, appStyle.padding]}>
               <HeaderCoins title="Jouer" navigation={this.props.navigation} />
                <ScrollView style={jouerStyle.mainView} showsVerticalScrollIndicator={false}>
                    {niveauItems}
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        niveaux: state.dataReducer.niveaux,
        userConnected: state.userConnectedReducer.userConnected
    };
}
export default connect(mapStateToProps)(JouerScreen);