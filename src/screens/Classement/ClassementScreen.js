import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Header from '../Header/Header';
import { appStyle, classementStyle } from '../../styles/styles';

var imgPath = "../../../assets/img/users/";
import { userData } from '../../../assets/mocks/userData';

export default class ClassementScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var users = userData.map((user,index) => {
            return(
                <View key={user.id} style={classementStyle.subView}>
                    <Text style={[appStyle.customFont, classementStyle.number]}>{index+1}</Text>
                    <Image style={classementStyle.img} source={user.photo} />
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