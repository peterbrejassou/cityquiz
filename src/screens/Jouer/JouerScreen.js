import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { appStyle, jouerStyle } from '../../styles/styles';
import HeaderCoins from '../Header/HeaderCoins';
import CardNiveau from '../Jouer/CardNiveau';

class JouerScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            niveauItems: null
        }
    }

    // Apres le montage du component on récupère les niveaux
    componentDidMount(){
        var niveauItems = this.props.niveaux.map((item) => {
            return <CardNiveau key={item.id} niveau={item} navigation={this.props.navigation} />;
        });
        this.setState({niveauItems});
    }
    
    render() {
        return (
            <View style={[appStyle.body, appStyle.padding]}>
                <HeaderCoins title="Jouer" navigation={this.props.navigation} />
                <SearchBar 
                    platform="android" 
                    placeholder="Chercher une ville..." 
                    onChangeText={(search) => this.setState({ search })} 
                    value={this.state.search}
                    containerStyle={jouerStyle.searchBar}
                    searchIcon={{color: '#fff'}}
                    cancelIcon={{ color: '#fff'}}
                    placeholderTextColor='#8e8e8e'
                    inputStyle={{color: '#fff'}} 
                />
                <ScrollView style={jouerStyle.mainView} showsVerticalScrollIndicator={false}>
                    {this.state.search === '' ? this.state.niveauItems 
                    : this.props.niveaux.map((item) => {
                        if (item.nom.includes(this.state.search)){
                            return <CardNiveau key={item.id} niveau={item} navigation={this.props.navigation} />;
                        }
                    })}
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