import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Image, Button } from 'react-native-elements';
import HeaderCoinsQuestion from '../Header/HeaderCoinsQuestion';
import { appStyle, questionStyle } from '../../styles/styles';


export default class QuestionScreen extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            score: 0,
            numeroQuestion: 0,
            questions: this.props.navigation.state.params.questions,
            questionEnCours: this.props.navigation.state.params.questions[0],
            indiceDisplayed: false,
            viewQuestion: true,
            answerIsGood: false,
            
        }
    }


    _questionView(q){
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderCoinsQuestion title="Niveau 1" questionNumber={this.state.numeroQuestion + 1} navigation={this.props.navigation} />

                <View style={questionStyle.questionView}>
                    <Image
                        style={questionStyle.img}
                        source={q.image}
                    />
                    <Text style={questionStyle.intitule}>{q.intitule}</Text>

                    <View style={questionStyle.buttonsView}>
                        {q.reponses.map((r, index) =>
                            <Button key={r} onPress={() => { this._valideReponse(q, index) }} title={r} buttonStyle={questionStyle.buttonAnswer} titleStyle={questionStyle.titleButtonAnswer} />
                        )}
                    </View>

                    <TouchableOpacity
                        onPress={() => { this._displayIndice() }}
                        style={questionStyle.buttonIndice}>
                        <Image source={require("../../../assets/img/loupe.png")} style={questionStyle.iconIndice} />
                        <Text style={questionStyle.titleButtonIndice}>Indice</Text>
                    </TouchableOpacity>
                </View>
                
                {this.state.indiceDisplayed ?
                    <View style={questionStyle.indiceView}>
                        <Text style={questionStyle.indiceTitle}>Indice</Text>
                        <ScrollView showsVerticalScrollIndicator={false} style={questionStyle.indiceScrollView}>
                            <Text style={questionStyle.indiceContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a leo massa. Maecenas dapibus metus quis nisi fermentum tempor. Phasellus faucibus, tortor vitae interdum dapibus, nunc odio lobortis sem, at ullamcorper magna ex nec tellus. Aenean congue eleifend tortor vitae interdum. Mauris tincidunt nec sem ac tristique. Fusce libero urna, blandit nec metus quis, semper condimentum justo. Proin et convallis enim, ut iaculis velit. Etiam luctus, nunc sit amet efficitur egestas, orci ex cursus tortor, vel tristique justo felis egestas massa. Aliquam nec tristique sem. Suspendisse commodo egestas posuere. Vivamus condimentum ultrices semper. Ut hendrerit convallis placerat.</Text>
                        </ScrollView>
                        <TouchableOpacity
                            onPress={() => { this._displayIndice() }}
                            style={questionStyle.indiceArrowCloseView}>
                            <Image source={require("../../../assets/img/arrow_down.png")} style={questionStyle.indiceArrowClose} />
                        </TouchableOpacity>
                    </View>
                    : null}
            </View>
        );
    }

    _displayIndice() {
        this.setState({ indiceDisplayed: !this.state.indiceDisplayed });
    }

    _valideReponse(question, index) {
        this.setState({ viewQuestion: false });

        if (index == question.bonneReponse) {
            this.setState({ score: this.state.score + 20, answerIsGood: true });
        } else {
            this.setState({ viewQuestion: false, answerIsGood: false });
        }
    }


    _goodAnswerView(q){
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderCoinsQuestion title="Lvl 1" questionNumber={this.state.numeroQuestion} navigation={this.props.navigation} />

                <View style={questionStyle.questionView}>
                    <Image
                        style={questionStyle.img}
                        source={q.image}
                    />
                    <Text style={questionStyle.intitule}>{q.intitule}</Text>

                    <Text>GOOD ANSWER TEXT</Text>
                </View>
            </View>
        );
    }


    _badAnswerView(q){
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderCoinsQuestion title="Lvl 1" questionNumber={this.state.numeroQuestion} navigation={this.props.navigation} />

                <View style={questionStyle.questionView}>
                    <Image
                        style={questionStyle.img}
                        source={q.image}
                    />
                    <Text style={questionStyle.intitule}>{q.intitule}</Text>

                    <Text>BAD ANSWER TEXT</Text>
                </View>
            </View>
        );
    }

    _nextQuestion(){

    }


    render() {
        if (this.state.viewQuestion){
            return (
                this._questionView(this.state.questionEnCours)
            );
        } else {
            switch (this.state.answerIsGood) {
                case true:
                    return (this._goodAnswerView(this.state.questionEnCours));
                    break;
                case false:
                    return (this._badAnswerView(this.state.questionEnCours));
                    break;
            }
        }
    }
}
