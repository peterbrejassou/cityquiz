import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Image, Button } from 'react-native-elements';
import HeaderCoinsQuestion from '../Header/HeaderCoinsQuestion';
import { appStyle, questionStyle, buttonStyle, finishStyle, winStyle, looseStyle } from '../../styles/styles';


export default class QuestionScreen extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
            score: 0,
            valeurQuestion: 20,
            niveauActuel: this.props.navigation.state.params.niveau,
            questions: this.props.navigation.state.params.niveau.questions,
            questionEnCours: this.props.navigation.state.params.niveau.questions[0],
            reponseDonnee: null,
            indiceDisplayed: false,
            viewQuestion: true,
            answerIsGood: null,
            finishView: false
            
        }
    }
    
    _questionView(){
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderCoinsQuestion title={this.state.niveauActuel.nom} questionNumber={this.state.questionEnCours.numero + 1} nbQuestionsTotal={this.state.questions.length} navigation={this.props.navigation} />

                <View style={questionStyle.questionView}>
                    <Image
                        style={questionStyle.img}
                        source={this.state.questionEnCours.image}
                    />
                    <Text style={questionStyle.intitule}>{this.state.questionEnCours.intitule}</Text>

                    <View style={questionStyle.buttonsView}>
                        {this.state.questionEnCours.reponses.map((r, index) =>
                            <Button key={r} onPress={() => { this._valideReponse(index) }} title={r} buttonStyle={questionStyle.buttonAnswer} titleStyle={questionStyle.titleButtonAnswer} />
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
                            <Text style={questionStyle.indiceContent}>{this.state.questionEnCours.indice}</Text>
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

    _valideReponse(index) {
        this.setState({ viewQuestion: false, reponseDonnee: index });

        if (index == this.state.questionEnCours.bonneReponse) {
            this.setState({ score: this.state.score + this.state.valeurQuestion, answerIsGood: true });
        } else {
            this.setState({ viewQuestion: false, answerIsGood: false });
        }
    }


    _goodAnswerView(){
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderCoinsQuestion title={this.state.niveauActuel.nom} questionNumber={this.state.questionEnCours.numero + 1} nbQuestionsTotal={this.state.questions.length} navigation={this.props.navigation} />

                <View style={questionStyle.questionView}>
                    <Image
                        style={questionStyle.img}
                        source={this.state.questionEnCours.image}
                    />
                    <Text style={questionStyle.intitule}>{this.state.questionEnCours.intitule}</Text>
                </View>

                <View style={questionStyle.reponses}>
                    <View style={questionStyle.bonneReponse}>
                        <Image source={require('../../../assets/img/success.png')} style={questionStyle.logoReponse} />
                        <Text style={questionStyle.titleBonneReponse}>{this.state.questionEnCours.reponses[this.state.questionEnCours.bonneReponse]}</Text>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={questionStyle.explicationScrollView}>
                    <Text style={questionStyle.explication}>{this.state.questionEnCours.explication}</Text>
                </ScrollView>

                <View>
                    <Button onPress={() => { this._nextQuestion() }} title="Suivant" buttonStyle={questionStyle.nextQuestion} titleStyle={buttonStyle.titleButtonStyle} />
                </View>
            </View>
        );
    }


    _badAnswerView(){
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderCoinsQuestion title={this.state.niveauActuel.nom} questionNumber={this.state.questionEnCours.numero + 1} nbQuestionsTotal={this.state.questions.length} navigation={this.props.navigation} />

                <View style={questionStyle.questionView}>
                    <Image
                        style={questionStyle.img}
                        source={this.state.questionEnCours.image}
                    />
                    <Text style={questionStyle.intitule}>{this.state.questionEnCours.intitule}</Text>
                </View>

                <View style={questionStyle.reponses}>
                    <View style={questionStyle.mauvaiseReponse}>
                        <Image source={require('../../../assets/img/error.png')} style={questionStyle.logoReponse} />
                        <Text style={questionStyle.titleMauvaiseReponse}>{this.state.questionEnCours.reponses[this.state.reponseDonnee]}</Text>
                    </View>

                    <View style={questionStyle.bonneReponse}>
                        <Image source={require('../../../assets/img/success.png')} style={questionStyle.logoReponse} />
                        <Text style={questionStyle.titleBonneReponse}>{this.state.questionEnCours.reponses[this.state.questionEnCours.bonneReponse]}</Text>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={questionStyle.explicationScrollView}>
                    <Text style={questionStyle.explication}>{this.state.questionEnCours.explication}</Text>
                </ScrollView>

                <View>
                    <Button onPress={() => { this._nextQuestion() }} title="Suivant" buttonStyle={questionStyle.nextQuestion} titleStyle={buttonStyle.titleButtonStyle} />
                </View>
            </View>
        );
    }

    _nextQuestion(){

        console.log(this.state.questions.length);

        if(this.state.questionEnCours.numero + 1 !== this.state.questions.length){
            this.setState({
                questionEnCours: this.props.navigation.state.params.niveau.questions[this.state.questionEnCours.numero + 1],
                viewQuestion: true
            });
        } else{
            this.setState({
                finishView: true
            });
        }
        
    }

    _finishView(){
        let scoreMinimum = (this.state.questions.length/2) * this.state.valeurQuestion;
        if(this.state.score < scoreMinimum){
            return(
                <View style={[appStyle.body, appStyle.padding]}>
                    <View style={finishStyle.firstView}>
                        <Image source={require("../../../assets/img/sad.png")} style={finishStyle.img} />
                    </View>
                    
                    <View style={finishStyle.secondView}>
                        <Text style={finishStyle.msg}>Dommage...</Text>
                        <Text style={looseStyle.text}>Retente ta chance</Text>
                    </View>
                    
                    <View style={finishStyle.thirdView}>
                        <Button onPress={() => { this.props.navigation.push("Question", { questions: this.state.questions, niveau: this.state.niveauActuel }) }} title="Rejouer" buttonStyle={buttonStyle.connexion} titleStyle={buttonStyle.titleButtonStyle} />
                        <Button onPress={() => { this.props.navigation.push("Menu") }} title="Retour au menu" buttonStyle={[buttonStyle.connexion, looseStyle.buttonNotFirst]} titleStyle={buttonStyle.titleButtonStyle} />
                    </View>                  
                </View>
            );
        } else{
            console.log(this.state.niveauActuel);
            return(
                <View style={[appStyle.body, appStyle.padding]}>
                    <View style={finishStyle.firstView}>
                        <Image source={require("../../../assets/img/confetti.png")} style={finishStyle.img} />
                    </View>

                    <View style={finishStyle.secondView}>
                        <Text style={finishStyle.msg}>Bravo !</Text>
                        <Text style={winStyle.pointsText}>+ {this.state.score} points</Text>
                        <View style={winStyle.piecesView}>
                            <Text style={winStyle.piecesText}>+ {this.state.niveauActuel.nbPieces}</Text>
                            <Image style={winStyle.piecesImg} source={(require("../../../assets/img/coins.png"))} />
                        </View>
                    </View>

                    <View style={finishStyle.thirdView}>
                        <Button onPress={() => { }} title="Partager le résultat" buttonStyle={winStyle.shareButton} titleStyle={buttonStyle.titleButtonStyle} />
                        <Button onPress={() => { }} title="Niveau suivant" buttonStyle={[buttonStyle.connexion, looseStyle.buttonNotFirst]} titleStyle={buttonStyle.titleButtonStyle} />
                        <Button onPress={() => { this.props.navigation.push("Menu") }} title="Retour au menu" buttonStyle={[buttonStyle.connexion, looseStyle.buttonNotFirst]} titleStyle={buttonStyle.titleButtonStyle} />
                    </View> 
                    

                </View>
            )
        }
    }


    render() {
        if (this.state.viewQuestion){
            return (
                this._questionView()
            );
        } else if(this.state.finishView) {
            return (
                this._finishView()
            );
        } else{
            switch (this.state.answerIsGood) {
                case true:
                    return (this._goodAnswerView());
                    break;
                case false:
                    return (this._badAnswerView());
                    break;
            }
        }
    }
}
