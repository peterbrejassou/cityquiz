import React from 'react';
import {connect } from 'react-redux';
import { View, Text, ScrollView, Image } from 'react-native';
import Header from '../Header/Header';
import { appStyle, classementStyle } from '../../styles/styles';

class ClassementScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    // Fonction d'affichage de l'image en fonction de son type (nécessite un require ou un uri)
    _displayImageAfterTypeCheck(photo) {
        // Si l'image est de type number (require)
        if (typeof (photo) == "number") {
            return <Image style={classementStyle.img} source={photo} />
        // Si l'image est de type string (image importé avec uri)
        } else if (typeof (photo) == "string") {
            return <Image style={classementStyle.img} source={{ uri: photo }} />;
        }
    }

    render() {
        // On trie le tableau en nbPoints décroissants
        this.props.users.sort((a, b) => (a.nbPoints < b.nbPoints) ? 1 : -1);

        // On parcours le tableau d'utilisateur et pour chaque on l'affiche
        var users = this.props.users.map((user, index) => {
            return(
                <View key={user.id} style={[classementStyle.subView, this.props.userConnected === user ? classementStyle.greenView : null ]}>
                    <Text style={[appStyle.customFont, classementStyle.number]}>{index+1}</Text>
                    {this._displayImageAfterTypeCheck(user.photo)}
                    <View style={classementStyle.viewNamePoints}>
                        <Text style={[appStyle.customFont, classementStyle.name]}>{user.prenom} {user.nom}</Text>
                        <Text style={[appStyle.customFont, classementStyle.points]}>{user.nbPoints} points</Text>
                    </View>
                </View>
            );
        });
        return (               
            <View style={[appStyle.body, appStyle.padding]}>
                <Header title="Classement" navigation={this.props.navigation} />

                <ScrollView style={classementStyle.scrollView}>
                    {users}
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.dataReducer.users,
        userConnected: state.userConnectedReducer.userConnected
    }
}
export default connect(mapStateToProps)(ClassementScreen);