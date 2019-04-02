import { StyleSheet } from 'react-native';

const greenColor = '#66B96A';
const grayColor = '#3A3E49';
const whiteColor = '#FFFFFF';

export const appStyle = StyleSheet.create({
    padding: {
        paddingLeft: 40,
        paddingRight: 40
    },

    body: {
        backgroundColor: grayColor,
        flex: 1,
    },

    mainView: {
        flex: 1
    },

    customFont: {
        fontFamily: "Montserrat-Regular"
    }
});

export const loginStyle = StyleSheet.create({
    firstSection: {
        marginTop: 100,
        alignItems: 'center'
    },

    secondSection: {
        marginTop: 50
    },

    thirdSection: {
        marginTop: 40
    },

    fourthSection: {
        color: whiteColor,
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 30,
        flexDirection: 'row'
    },

    title: {
        fontSize: 40,
        color: whiteColor,
    },

    inputTitles: {
        color: whiteColor,
        fontSize: 15
    },

    forgetPwd: {
        color: whiteColor,
        marginTop: 10,
        textAlign: 'right',
        textDecorationLine: 'underline',
        marginRight: 10
    },

    register: {
        color: whiteColor
    },

    colorRegister: {
        color: greenColor
    },

    secondInput: {
        marginTop: 20
    }
});

export const inputStyle = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: whiteColor,
        borderRadius: 4,
        color: whiteColor,
    }
});

export const buttonStyle = StyleSheet.create({
    connexion: {
        backgroundColor: greenColor,
        height: 52,
        borderRadius: 100
    },

    titleButtonStyle: {
        color: whiteColor
    }
});

export const menuStyle = StyleSheet.create({
    firstSection: {
        marginTop: 30,
        alignItems: 'flex-end'
    },

    secondSection: {
        marginTop: 52,
    },

    thirdSection: {
        marginTop: 82
    },

    fourthSection: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: greenColor,
        height: 75
    },

    whiteText: {
        color: whiteColor
    },

    imgUser: {
        borderRadius: 100,
        width: 100,
        height: 100
    },

    idUser: {
        fontSize: 15,
        color: 'rgba(255, 255, 255, 0.5)'
    },

    cross: {
        width: 25,
        height: 25
    },

    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    bottomLogos: {
        width: 20,
        height: 20
    },

    bottomTexts: {
        marginLeft: 20,
        color: whiteColor,
        fontWeight: 'bold',
    }
});


export const menuItemStyle = StyleSheet.create({
    itemView: {
        flexDirection: 'row',
        paddingBottom: 50,
    },

    icon: {
        width: 25,
        height: 25
    },

    text: {
        color: whiteColor,
        marginLeft: 20
    }
});


export const headerStyle = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },

    btnMenu: {
        width: 40,
        height: 40
    },

    title: {
        color: whiteColor,
        fontSize: 20,
        fontWeight: 'bold'
    },

    coinsView: {
        flexDirection: 'row'
    },

    coinsText: {
        color: whiteColor
    },

    coinsImg: {
        width: 20,
        height: 20,
        marginLeft: 5
    },

    textView: {
        alignItems: 'center',
        flexDirection: 'column',
    },

    nbQuestion: {
        color: '#FFFFFFBB',
        fontSize: 12,
    },

    headerSimpleMainView: {
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerSimpleBtnMenuTouchable: {
        position: 'absolute',
        left: 0
    }
});

export const jouerStyle = StyleSheet.create({
    mainView: {
        marginTop: 20
    }
});

export const cardNiveauStyle = StyleSheet.create({
    mainView: {
        backgroundColor: greenColor,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        borderRadius: 10,
        padding: 20,
    },

    title: {
        color: whiteColor,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },

    viewQuestion:{
        flexDirection: 'row',
    },

    viewDifficulty: {
        flexDirection: 'row',
    },

    whiteText: {
        color: whiteColor
    },

    buttonView: {
        alignItems: 'center',
    },

    button: {
        backgroundColor: 'transparent',
        borderColor: whiteColor,
        borderWidth: 1,
        borderRadius: 100,
        width: 180,
        marginTop: 20,
    },

    titleButton: {
        color: whiteColor,
        fontWeight: 'bold',
    }
});

export const questionStyle = StyleSheet.create({
    questionView: {
        alignItems: 'center',
        marginTop: 30,
        zIndex: 1
    },
    
    img: {
        width: 300,
        height: 220
    },

    intitule: {
        color: whiteColor,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },

    buttonsView: {
        marginTop: 20,
    },

    buttonAnswer: {
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: whiteColor,
        width: 300,
        height: 70,
        margin: 10,
    },

    titleButtonAnswer: {
        color: whiteColor,
        fontSize: 16,
    },

    buttonIndice: {
        backgroundColor: 'transparent',
        marginTop: 20,
        flexDirection: 'row',
    },

    iconIndice: {
        width: 20,
        height: 20
    },

    titleButtonIndice: {
       color: greenColor ,
       marginLeft: 10
    },
    
    indiceView: {
        backgroundColor: greenColor,
        width: 350,
        height: 150,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        zIndex: 2,
        position: 'absolute',
        bottom: 0,
        left: 30
    },

    indiceTitle:{
        textTransform: 'uppercase',
        textAlign: 'center',
        color: whiteColor,
        marginTop: 10,
        fontSize: 20,
    },

    indiceContent: {
        textAlign: 'justify',
        color: whiteColor,
        marginTop: 10,
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,
    },

    indiceArrowCloseView: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5
    },

    indiceArrowClose: {
        width: 30,
        height: 30,
    },

    reponses:{
        marginTop: 20
    },

    bonneReponse: {
        backgroundColor: whiteColor,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: whiteColor,
        width: 300,
        height: 70,
        marginTop: 5,
        marginBottom: 0,
        marginLeft: 15,
        marginRight: 5,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -5,
    },

    titleBonneReponse: {
        color: 'black',
        fontSize: 16
    },

    mauvaiseReponse: {
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: whiteColor,
        width: 300,
        height: 70,
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 5,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleMauvaiseReponse: {
        color: whiteColor,
        fontSize: 16
    },

    explicationScrollView:{
        marginTop: 15
    },

    explication: {
        color: whiteColor, 
        textAlign: 'justify' 
    },

    logoReponse: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: -7,
        left: -170
    },

    nextQuestion: {
        backgroundColor: greenColor,
        height: 52,
        borderRadius: 100,
        marginBottom: 20,
        marginTop: 20
    }
});


export const finishStyle = StyleSheet.create({
    firstView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    secondView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    thirdView: {
        flex: 1,
        justifyContent: 'center',
    },

    img: {
        width: 150,
        height: 150,
        marginTop: 20
    },

    msg: {
        color: whiteColor,
        textTransform: 'uppercase',
        fontSize: 40,
        marginTop: 20
    },
});


export const winStyle = StyleSheet.create({
    pointsText: {
        color: greenColor,
        fontSize: 18
    },
    
    piecesView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    piecesText: {
        color: 'yellow',
        fontSize: 18
    },

    piecesImg: {
        width: 15,
        height: 15,
        marginLeft: 5
    },

    shareButton: {
        backgroundColor: 'transparent',
        borderColor: whiteColor,
        borderWidth: 1,
        height: 52,
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    shareButtonImg: {
        width: 20,
        height: 20
    },

    titleShareButton: {
        color: whiteColor,
        marginLeft: 10,
        fontWeight: 'bold',
    }
});

export const looseStyle = StyleSheet.create({
    text: {
        color: whiteColor,
        fontSize: 18
    },

    buttonNotFirst: {
        marginTop: 15
    }
});


export const profilStyle = StyleSheet.create({
    firstSection: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3
    },

    secondSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start'
    },

    thirdSection: {
        flex: 5
    },

    viewCoins: {
        flexDirection: 'row',
    },

    statsTitle: {
        color: whiteColor,
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 30,
    },

    col: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    stat: {
        color: whiteColor,
        fontSize: 25,
        fontWeight: 'bold',
    },

    textStat: {
        color: whiteColor,
        fontSize: 13,
    }
});
