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
    },

    backLogo: {
        width: 30,
        height: 30,
        marginLeft: 30
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
        marginTop: 30
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
        fontFamily: "Montserrat-Bold",
        color: whiteColor,
    },

    inputTitles: {
        color: whiteColor,
        fontSize: 15,
        fontFamily: 'Montserrat-Bold',
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
    },

    badOrEmptyLogs: {
        color: '#EF5350',
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        marginTop: 20
    }
});

export const inputStyle = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: whiteColor,
        borderRadius: 4,
        color: whiteColor,
        marginTop: 5
    }
});

export const buttonStyle = StyleSheet.create({
    connexion: {
        backgroundColor: greenColor,
        height: 52,
        borderRadius: 100
    },

    titleButtonStyle: {
        color: whiteColor,
        fontFamily: 'Montserrat-Bold'
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
        fontFamily: "Montserrat-Bold",
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
        fontFamily: "Montserrat-Bold",
    },

    coinsView: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    coinsText: {
        color: whiteColor
    },

    coinsImg: {
        width: 15,
        height: 15,
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
    },

    help: {
        width: 35,
        height: 35
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
        fontFamily: "Montserrat-Bold",
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
        fontFamily: "Montserrat-Bold",
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
        fontFamily: "Montserrat-Bold",
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

    pointsText: {
        color: greenColor,
        fontSize: 18
    },

    countBonnesReponses: {
        color: whiteColor,
        fontSize: 18,
        marginTop: 10
    }
});


export const winStyle = StyleSheet.create({    
    piecesView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    piecesText: {
        color: '#FFD949',
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
        fontFamily: "Montserrat-Bold",
    }
});

export const looseStyle = StyleSheet.create({
    text: {
        color: whiteColor,
        fontSize: 18,
        textAlign: 'center'
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
        alignItems: 'center'
    },

    statsTitle: {
        color: whiteColor,
        fontSize: 15,
        fontFamily: "Montserrat-Bold",
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
        fontFamily: "Montserrat-Bold",
    },

    textStat: {
        color: whiteColor,
        fontSize: 13,
    }
});


export const classementStyle = StyleSheet.create({
    scrollView: {
        marginTop: 40
    },

    subView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        paddingBottom: 15,
        borderColor: '#FFFFFF1A',
        paddingLeft: 30,
        paddingTop: 15
    },

    number: {
        fontSize: 16,
        fontFamily: "Montserrat-Bold",
        color: whiteColor,
        paddingRight: 60,
    },
    
    img:{
        width: 70,
        height: 70,
        borderRadius: 100,
    },

    viewNamePoints: {
        paddingLeft: 20,
    },
    
    name: {
        fontSize: 16,
        color: whiteColor
    },
    
    points: {
        fontSize: 12,
        color: whiteColor,
        paddingTop: 5,
    },

    greenView: {
        backgroundColor: greenColor,
        borderRadius: 10
    }
});


export const proposerLieuStyle = StyleSheet.create({
    mainView: {
        marginTop: 30
    },
    
    addTouchable: {
        backgroundColor: '#FFFFFF80',
        borderRadius: 10,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
    },

    addLogo: {
        width: 35,
        height: 35
    },

    inputsTitle: {
        marginTop: 20,
    },

    inputs: {
        marginTop: 5,
    },

    inputsMultiline: {
        textAlignVertical: 'top'
    },

    btnEnvoyer: {
        marginTop: 30,
        marginBottom: 30
    },

    pickerView: {
        borderWidth: 1,
        borderColor: whiteColor,
        borderRadius: 4,
        marginTop: 5,
    },

    picker:{
        color: whiteColor,
        borderWidth: 1,
        borderColor: 'red',
    },

    pickerItem: {
        fontSize: 25,
    }
}); 


export const helpScreenStyle = StyleSheet.create({
    mainView: {
        position: 'absolute',
        top: 70,
        backgroundColor: grayColor,
        borderWidth: 1,
        borderColor: whiteColor,
        borderRadius: 10,
        padding: 15,
        zIndex: 10,
        width: '100%',
        height: 500
    },

    viewCross: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    
    croix: {
        width: 20,
        height: 20,
    },

    viewContent: {
        marginTop: 10
    },

    title: {
        color: whiteColor,
        fontSize: 20,
        fontFamily: 'Montserrat-Bold'
    },

    content: {
        color: whiteColor,
        fontSize: 15,
        marginTop: 20
    }
});


export const parametresStyle = StyleSheet.create({
    firstView: {
        marginTop: 50
    },
    
    titleSection: {
        color: whiteColor,
        fontSize: 18,
        textTransform: 'uppercase',
        fontFamily: 'Montserrat-Bold'
    },

    sectionSwitch: {
        borderWidth: 1,
        borderColor: '#FFFFFF33',
        borderRadius: 10,
        padding: 20,
        marginTop: 10
    },

    optionSwitch: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    optionSwitch2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },

    titleOption: {
        color: whiteColor,
        fontSize: 15,
    },

    secondView: {
        marginTop: 50
    },

    buttons: {
        backgroundColor: '#FFFFFF80',
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        height: 90
    },

    logoButtons: {
        width: 30,
        height: 30
    },

    textButton: {
        color: whiteColor,
        marginLeft: 20,
        fontSize: 15,
        fontFamily: 'Montserrat-Bold'
    },

    thirdView: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30
    },

    deleteCompte: {
        color: '#EF5350',
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold'
    },

    titleUpdate: {
        color: whiteColor,
        fontSize: 16,
        textTransform: 'uppercase',
        fontFamily: 'Montserrat-Bold'
    },

    updateEmailView: {
        marginTop: 20
    },

    inputTitle:{
        marginTop: 20
    },

    input: {
        marginTop: 5
    },

    btnUpdate: {
        marginTop: 40
    },

    photoUpdateProfilView: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative'
    },

    photoUpdateProfil: {
        width: 120,
        height: 120
    },

    addUpdatePhotoProfil: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: '40%',
        left: '29%'
    }
});

export const forgotPasswordStyle = StyleSheet.create({
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: 80
    },
    
    title: {
        color: whiteColor,
        fontSize: 15,
        marginTop: 30
    },

    text: {
        color: whiteColor
    },

    firstSection: {
        marginTop: 20,
        alignItems: 'center'
    },

    secondSection: {
        marginTop: 30
    },

    input: {
        marginTop: 30,
    }, 

    btnView: {
        paddingBottom: 30
    }
});