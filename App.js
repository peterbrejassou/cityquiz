import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from './src/screens/Login/LoginScreen';
import InscriptionScreen from './src/screens/Inscription/InscriptionScreen';
import MenuScreen from './src/screens/Menu/MenuScreen';
import ParametresScreen from './src/screens/Parametres/ParametresScreen';
import JouerScreen from './src/screens/Jouer/JouerScreen';
import ProposerLieuScreen from './src/screens/ProposerLieu/ProposerLieuScreen';
import QuestionScreen from './src/screens/Question/QuestionScreen';
import ProfilScreen from './src/screens/Profil/ProfilScreen';
import BadgesScreen from './src/screens/Badges/BadgesScreen';
import ClassementScreen from './src/screens/Classement/ClassementScreen';


const AppNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Inscription: { screen: InscriptionScreen },
    Menu: { screen: MenuScreen},
    Parametres: { screen: ParametresScreen },
    Jouer: { screen: JouerScreen },
    ProposerLieu: { screen: ProposerLieuScreen },
    Question: { screen: QuestionScreen },
    Profil: { screen: ProfilScreen },
    Badges: { screen: BadgesScreen },
    Classement: { screen: ClassementScreen }
  },
  {
    initialRouteName: "Profil",
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <AppContainer />