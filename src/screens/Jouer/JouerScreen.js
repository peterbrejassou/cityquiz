import React from 'react';
import { View, ScrollView } from 'react-native';
import { appStyle, jouerStyle } from '../../styles/styles';
import HeaderCoins from '../Header/HeaderCoins';
import CardNiveau from '../Jouer/CardNiveau';
import { niveauData } from '../../../assets/mocks/niveauData';

export default class JouerScreen extends React.Component {
    render() {
        var niveauItems = niveauData.map((item) => {
            return <CardNiveau key={item.id} nom={item.nom} difficulte={item.difficulte} questions={item.questions} navigation={this.props.navigation} />
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