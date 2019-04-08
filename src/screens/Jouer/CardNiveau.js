import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { appStyle, cardNiveauStyle } from '../../styles/styles';

export default class CardNiveau extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={cardNiveauStyle.mainView}>
        <Text style={[appStyle.customFont, cardNiveauStyle.title]}>{this.props.niveau.nom}</Text>
        <View style={cardNiveauStyle.viewQuestion}>
          <Text style={[appStyle.customFont, cardNiveauStyle.whiteText]}>Questions : </Text>
          <Text style={[appStyle.customFont, cardNiveauStyle.whiteText]}>{this.props.niveau.questions.length}</Text>
        </View>
        <View style={cardNiveauStyle.viewDifficulty}>
          <Text style={[appStyle.customFont, cardNiveauStyle.whiteText]}>Difficulté : </Text>
          <Text style={[appStyle.customFont, cardNiveauStyle.whiteText]}>{this.props.niveau.difficulte}</Text>
        </View>
        <View style={cardNiveauStyle.buttonView}>
          <Button onPress={() => { this.props.navigation.push('Question', { niveau: this.props.niveau }) }} title="Démarrer" buttonStyle={cardNiveauStyle.button} titleStyle={[appStyle.customFont, cardNiveauStyle.titleButton]} />
        </View>
      </View>
    );
  }
}
