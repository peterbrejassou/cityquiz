import React from 'react';
import {connect } from 'react-redux';
import { View, Text, ScrollView, Image } from 'react-native';
import Header from '../Header/Header';
import { appStyle, classementStyle } from '../../styles/styles';

class ClassementScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    _displayImageAfterTypeCheck(photo) {
        if (typeof (photo) == "number") {
            return <Image style={classementStyle.img} source={photo} />
        } else if (typeof (photo) == "string") {
            return <Image style={classementStyle.img} source={{ uri: photo }} />;
        }
    }

    render() {
        console.log(this.props.users);
        // On trie le tableau en nbPoints décroissants
        this.props.users.sort((a, b) => (a.nbPoints < b.nbPoints) ? 1 : -1);

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