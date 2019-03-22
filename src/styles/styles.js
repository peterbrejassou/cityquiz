import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native'

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
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    coinsView: {
        flexDirection: 'row'
    },

    coinsText: {
        color: 'white'
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
    }
});

export const jouerStyle = StyleSheet.create({
    mainView: {
        marginTop: 20,
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
        color: 'white',
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
        color: 'white'
    },

    buttonView: {
        alignItems: 'center',
    },

    button: {
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 100,
        width: 180,
        marginTop: 20,
    },

    titleButton: {
        color: 'white',
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
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },

    buttonsView: {
        marginTop: 20,
    },

    buttonAnswer: {
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        width: 300,
        height: 70,
        margin: 10,
    },

    titleButtonAnswer: {
        color: 'white',
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
        width: 330,
        height: 180,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        zIndex: 2,
       /*  position: 'absolute',
        bottom: 10,
        left: Dimensions.get('window').width/2,
        transform: [
            { translateX: -Dimensions.get('window').width/2 },
        ] */
    },

    indiceTitle:{
        textTransform: 'uppercase',
        textAlign: 'center',
        color: 'white',
        marginTop: 10,
        fontSize: 20,
    },

    indiceContent: {
        textAlign: 'justify',
        color: 'white',
        marginTop: 10,
        fontSize: 16
    },

    indiceArrowCloseView: {
        alignItems: 'center',
        marginTop: 30
    },

    indiceArrowClose: {
        width: 15,
        height: 30
    },

    indiceScrollView: {
        paddingLeft: 20,
        paddingRight: 20
    }
});
