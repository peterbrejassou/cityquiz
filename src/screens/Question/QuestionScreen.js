import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Image, Button } from 'react-native-elements';
import HeaderCoinsQuestion from '../Header/HeaderCoinsQuestion';
import { appStyle, questionStyle, buttonStyle, finishStyle, winStyle, looseStyle } from '../../styles/styles';

class QuestionScreen extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
            score: 0,
            countBonnesReponses : 0,
            niveauActuel: this.props.navigation.state.params.niveau,
            questions: this.props.navigation.state.params.niveau.questions,
            questionEnCours: this.props.navigation.state.params.niveau.questions[0],
            reponseDonnee: null,
            indiceDisplayed: false,
            viewQuestion: true,
            answerIsGood: null,
            finishView: false,
            nextLevelAvailable: true
        }
    }

    _displayImageAfterTypeCheck(){
        var imageQuestion = this.props.niveaux[this.state.niveauActuel.id - 1].questions[this.state.questionEnCours.numero - 1].image;

        if (typeof(imageQuestion) == "number"){
            return (
                <Image
                    style={questionStyle.img}
                    source={imageQuestion}
                />
            );
        } else if (typeof (imageQuestion) == "string"){
            return (
                <Image
                    style={questionStyle.img}
                    source={{uri: imageQuestion}}
                />
            );
        }
    }
    
    _questionView(){
        

        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderCoinsQuestion title={this.state.niveauActuel.nom} questionNumber={this.state.questionEnCours.numero} nbQuestionsTotal={this.state.questions.length} navigation={this.props.navigation} />

                <View style={questionStyle.questionView}>
                    {this._displayImageAfterTypeCheck()}
                    
                    <Text style={[appStyle.customFont, questionStyle.intitule]}>{this.state.questionEnCours.intitule}</Text>

                    <View style={questionStyle.buttonsView}>
                        {this.state.questionEnCours.reponses.map((r, index) =>
                            <Button key={r} onPress={() => { this._valideReponse(index) }} title={r} buttonStyle={questionStyle.buttonAnswer} titleStyle={[appStyle.customFont, questionStyle.titleButtonAnswer]} />
                        )}
                    </View>

                    <TouchableOpacity
                        onPress={() => this._displayIndice()}
                        style={questionStyle.buttonIndice}>
                        <Image source={require("../../../assets/img/loupe.png")} style={questionStyle.iconIndice} />
                        <Text style={[appStyle.customFont, questionStyle.titleButtonIndice]}>Indice</Text>
                    </TouchableOpacity>
                </View>
                
                {this.state.indiceDisplayed ?
                    <View style={questionStyle.indiceView}>
                        <Text style={[appStyle.customFont, questionStyle.indiceTitle]}>Indice</Text>
                        <ScrollView showsVerticalScrollIndicator={false} style={questionStyle.indiceScrollView}>
                            <Text style={[appStyle.customFont, questionStyle.indiceContent]}>{this.state.questionEnCours.indice}</Text>
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
        // On affiche ou cache l'indice (inversion de la variable)
        this.setState({ indiceDisplayed: !this.state.indiceDisplayed });
    }

    _valideReponse(index) {
        this.setState({ viewQuestion: false, reponseDonnee: index });

        // Si c'est la bonne réponse
        if (index == this.state.questionEnCours.bonneReponse) {
            // On update le score, on ajoute 1 au compteur de bonnes réponses, et on met awnserIsGood à true pour afficher l'écran "goodAnswerView"
            this.setState({ 
                score: this.state.score + this.state.questionEnCours.valeur,
                countBonnesReponses: this.state.countBonnesReponses + 1, 
                answerIsGood: true 
            });
            this.props.dispatch({ type: 'UPDATE_POINTS_USER', value: this.state.questionEnCours.valeur });
        // Si c'est la mauvaise réponse
        } else {
            // On met awnserIsGood à false pour afficher l'écran "badAnswerView"
            this.setState({ answerIsGood: false });
        }
    }

    _goodAnswerView(){
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderCoinsQuestion title={this.state.niveauActuel.nom} questionNumber={this.state.questionEnCours.numero} nbQuestionsTotal={this.state.questions.length} navigation={this.props.navigation} />

                <View style={questionStyle.questionView}>
                    {this._displayImageAfterTypeCheck()}
                    <Text style={[appStyle.customFont, questionStyle.intitule]}>{this.state.questionEnCours.intitule}</Text>
                </View>

                <View style={questionStyle.reponses}>
                    <View style={questionStyle.bonneReponse}>
                        <Image source={require('../../../assets/img/success.png')} style={questionStyle.logoReponse} />
                        <Text style={[appStyle.customFont, questionStyle.titleBonneReponse]}>{this.state.questionEnCours.reponses[this.state.questionEnCours.bonneReponse]}</Text>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={questionStyle.explicationScrollView}>
                    <Text style={[appStyle.customFont, questionStyle.explication]}>{this.state.questionEnCours.explication}</Text>
                </ScrollView>

                <View>
                    <Button onPress={() => { this._nextQuestion() }} title="Suivant" buttonStyle={questionStyle.nextQuestion} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                </View>
            </View>
        );
    }


    _badAnswerView(){
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderCoinsQuestion title={this.state.niveauActuel.nom} questionNumber={this.state.questionEnCours.numero} nbQuestionsTotal={this.state.questions.length} navigation={this.props.navigation} />

                <View style={questionStyle.questionView}>
                    {this._displayImageAfterTypeCheck()}
                    <Text style={[appStyle.customFont, questionStyle.intitule]}>{this.state.questionEnCours.intitule}</Text>
                </View>

                <View style={questionStyle.reponses}>
                    <View style={questionStyle.mauvaiseReponse}>
                        <Image source={require('../../../assets/img/error.png')} style={questionStyle.logoReponse} />
                        <Text style={[appStyle.customFont, questionStyle.titleMauvaiseReponse]}>{this.state.questionEnCours.reponses[this.state.reponseDonnee]}</Text>
                    </View>

                    <View style={questionStyle.bonneReponse}>
                        <Image source={require('../../../assets/img/success.png')} style={questionStyle.logoReponse} />
                        <Text style={[appStyle.customFont, questionStyle.titleBonneReponse]}>{this.state.questionEnCours.reponses[this.state.questionEnCours.bonneReponse]}</Text>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={questionStyle.explicationScrollView}>
                    <Text style={[appStyle.customFont, questionStyle.explication]}>{this.state.questionEnCours.explication}</Text>
                </ScrollView>

                <View>
                    <Button onPress={() => { this._nextQuestion() }} title="Suivant" buttonStyle={questionStyle.nextQuestion} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                </View>
            </View>
        );
    }

    _nextQuestion(){
        if(this.state.questionEnCours.numero !== this.state.questions.length){
            this.setState({
                questionEnCours: this.props.navigation.state.params.niveau.questions[this.state.questionEnCours.numero],
                viewQuestion: true
            });
        } else{
            this.setState({finishView: true});
        }
    }

    _generateButtonNextLevel(){
        // Si le niveau suivant est défini (l'id des niveaux commence à 1 dans les mock mais l'index du tablea niveaux commence à 0 donc on ne met pas -1)
        if (this.props.niveaux[this.state.niveauActuel.id] !== undefined) {
            // On affiche le bouton "Niveau Suivant" qui rappelle le component actuel mais avec le niveau suivant
            return <Button onPress={() => { this.props.navigation.push("Question", { niveau: this.props.niveaux[this.state.niveauActuel.id] }); }} title="Niveau suivant" buttonStyle={[buttonStyle.connexion, looseStyle.buttonNotFirst]} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
        }
    }

    _renderNbPiecesGagnees(isNiveauDejaFait){
        if (!isNiveauDejaFait){
            return (
                <View style={winStyle.piecesView}>
                    <Text style={[appStyle.customFont, winStyle.piecesText]}>+ {this.state.niveauActuel.nbPieces}</Text>
                    <Image style={winStyle.piecesImg} source={(require("../../../assets/img/coins.png"))} />
                </View>
            );
        }
    }

    _finishView(){
        //Calcul du score minimum (= somme des points de chaque question / 2)
        var scoreMinimum = 0;
        this.state.niveauActuel.questions.forEach((q) => {
            scoreMinimum += q.valeur;
        });
        scoreMinimum /= 2;

        if (this.state.score < scoreMinimum){
            return(
                <View style={[appStyle.body, appStyle.padding]}>
                    <View style={finishStyle.firstView}>
                        <Image source={require("../../../assets/img/sad.png")} style={finishStyle.img} />
                    </View>
                    
                    <View style={finishStyle.secondView}>
                        <Text style={[appStyle.customFont, finishStyle.msg]}>Dommage...</Text>
                        <Text style={[appStyle.customFont, looseStyle.text]}>Retente ta chance</Text>
                        <Text style={[appStyle.customFont, finishStyle.countBonnesReponses]}>{this.state.countBonnesReponses > 1 ? this.state.countBonnesReponses + " bonnes réponses sur " + this.state.questions.length : this.state.countBonnesReponses + " bonne réponse sur " + this.state.questions.length}</Text>
                        <Text style={[appStyle.customFont, finishStyle.pointsText]}>{this.state.score > 0 ? "+ " + this.state.score + " points" : ""}</Text>
                    </View>
                    
                    <View style={finishStyle.thirdView}>
                        <Button onPress={() => { this.props.navigation.push("Question", { niveau: this.state.niveauActuel }) }} title="Rejouer" buttonStyle={buttonStyle.connexion} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                        <Button onPress={() => { this.props.navigation.navigate("Menu") }} title="Retour au menu" buttonStyle={[buttonStyle.connexion, looseStyle.buttonNotFirst]} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                    </View>                  
                </View>
            );
        } else {
            // On enregistre la valuer de alreadyWon avant de la changer pour le render en dessous
            var isNiveauDejaFait = this.props.niveaux[this.state.niveauActuel.id - 1].alreadyWon;

            // Si le niveau n'a pas déjà été remporté auparavant
            if (!this.props.niveaux[this.state.niveauActuel.id - 1].alreadyWon) {
                // On update le nombre de pieces de l'utilisateur
                this.props.dispatch({ type: 'UPDATE_PIECES_USER', value: this.state.niveauActuel.nbPieces });
                // On passe le alreadyWon du niveau à true pour ne pas regagner des pièces si on refait le niveau
                this.props.dispatch({ type: 'UPDATE_STATUS_ALREADYWON_LEVEL', value: this.state.niveauActuel.id });
            }   

            return(
                <View style={[appStyle.body, appStyle.padding]}>
                    <View style={finishStyle.firstView}>
                        <Image source={require("../../../assets/img/confetti.png")} style={finishStyle.img} />
                    </View>

                    <View style={finishStyle.secondView}>
                        <Text style={[appStyle.customFont, finishStyle.msg]}>Bravo !</Text>
                        <Text style={[appStyle.customFont, finishStyle.countBonnesReponses]}>{this.state.countBonnesReponses > 1 ? this.state.countBonnesReponses + " bonnes réponses sur " + this.state.questions.length : this.state.countBonnesReponses + " bonne réponse sur " + this.state.questions.length}</Text>
                        <Text style={[appStyle.customFont, finishStyle.pointsText]}>+ {this.state.score} points</Text>
                        {this._renderNbPiecesGagnees(isNiveauDejaFait)}
                    </View>

                    <View style={finishStyle.thirdView}>
                        <TouchableOpacity
                        onPress={() => { alert("Share") }}
                        style={winStyle.shareButton}>
                            <Image source={require("../../../assets/img/share.png")} style={winStyle.shareButtonImg} />
                            <Text style={[appStyle.customFont, winStyle.titleShareButton]}>Partager le résultat</Text>
                        </TouchableOpacity>
                        {this._generateButtonNextLevel()}
                        <Button onPress={() => { this.props.navigation.navigate("Menu") }} title="Retour au menu" buttonStyle={[buttonStyle.connexion, looseStyle.buttonNotFirst]} titleStyle={[appStyle.customFont, buttonStyle.titleButtonStyle]} />
                    </View> 
                </View>
            ); 
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

const mapStateToProps = (state) => {
    return {
        niveaux: state.dataReducer.niveaux,
        userConnected: state.userConnectedReducer.userConnected
    };
}
export default connect(mapStateToProps)(QuestionScreen);