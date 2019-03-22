import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { cardNiveauStyle } from '../../styles/styles';

export default class CardNiveau extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={cardNiveauStyle.mainView}>
        <Text style={cardNiveauStyle.title}>{this.props.nom}</Text>
        <View style={cardNiveauStyle.viewQuestion}>
          <Text style={cardNiveauStyle.whiteText}>Questions : </Text>
          <Text style={cardNiveauStyle.whiteText}>{this.props.questions.length}</Text>
        </View>
        <View style={cardNiveauStyle.viewDifficulty}>
          <Text style={cardNiveauStyle.whiteText}>Difficulté : </Text>
          <Text style={cardNiveauStyle.whiteText}>{this.props.difficulte}</Text>
        </View>
        <View style={cardNiveauStyle.buttonView}>
          <Button onPress={() => { this.props.navigation.navigate('Question', { questions: this.props.questions })}} title="Démarrer" buttonStyle={cardNiveauStyle.button} titleStyle={cardNiveauStyle.titleButton} />
        </View>
      </View>
    );
  }
}
