import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Image, Button } from 'react-native-elements';
import HeaderCoinsQuestion from '../Header/HeaderCoinsQuestion';
import { appStyle, questionStyle } from '../../styles/styles';

export default class QuestionScreen extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            numeroQuestion: 0,
            score: 0,
            indiceDisplayed: false
        }       
    }

    _displayIndice(){
        this.setState({indiceDisplayed: !this.state.indiceDisplayed});
    }

    render() {
        var questions = this.props.navigation.state.params.questions;

        var test = questions.map((q) => {
            return <View style={questionStyle.questionView}>
                        <Image
                            style={questionStyle.img}
                            source={q.image}
                        />
                        <Text style={questionStyle.intitule}>{q.intitule}</Text>

                        <View style={questionStyle.buttonsView}>
                            {q.reponses.map((r) =>
                                <Button key={r} onPress={() => { }} title={r} buttonStyle={questionStyle.buttonAnswer} titleStyle={questionStyle.titleButtonAnswer} />
                            )}
                        </View>
                        
                        <TouchableOpacity
                            onPress={() => { this._displayIndice()}}
                            style={questionStyle.buttonIndice}>
                            <Image source={require("../../../assets/img/loupe.png")} style={questionStyle.iconIndice} />
                            <Text style={questionStyle.titleButtonIndice}>Indice</Text>
                        </TouchableOpacity>
                   </View>
        });

        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderCoinsQuestion title="Lvl 1" questionNumber={5} navigation={this.props.navigation} />
                
                {test[this.state.numeroQuestion]}

                {this.state.indiceDisplayed ? 
                    <View style={questionStyle.indiceView}>
                        <Text style={questionStyle.indiceTitle}>Indice</Text>
                        <ScrollView showsVerticalScrollIndicator={false} style={questionStyle.indiceScrollView}>
                                <Text style={questionStyle.indiceContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a leo massa. Maecenas dapibus metus quis nisi fermentum tempor. Phasellus faucibus, tortor vitae interdum dapibus, nunc odio lobortis sem, at ullamcorper magna ex nec tellus. Aenean congue eleifend tortor vitae interdum. Mauris tincidunt nec sem ac tristique. Fusce libero urna, blandit nec metus quis, semper condimentum justo. Proin et convallis enim, ut iaculis velit. Etiam luctus, nunc sit amet efficitur egestas, orci ex cursus tortor, vel tristique justo felis egestas massa. Aliquam nec tristique sem. Suspendisse commodo egestas posuere. Vivamus condimentum ultrices semper. Ut hendrerit convallis placerat.</Text>
                                <TouchableOpacity style={questionStyle.indiceArrowCloseView}>
                                    <Image style={questionStyle.indiceArrowClose} />
                                </TouchableOpacity>
                        </ScrollView>
                    </View>
                : null }
            </View>
        );
    }
}
