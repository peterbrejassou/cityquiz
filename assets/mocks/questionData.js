var imgPath = "../img/questions/";

export const questionData = [
    {
        id: 1,
        numero: 1,
        intitule: "Quel est ce lieu ?",
        image: require(imgPath + "chateau-duc-bretagne.png"),
        bonneReponse: 1,
        reponses: [
            "Le château des Ducs de Bretagne",
            "Le château de Versailles",
            "La Tour LU",
            "Le Panthéon"
        ],
        indice: "Il est situé en Loire Atlantique et est classé monument historique depuis 1840. C’est aujourd’hui un musée d’histoire.",
    },
    {
        id: 2,
        numero: 2,
        intitule: "Qui est l'artiste qui a réalisé cette statue ?",
        image: require(imgPath + "statue-bouffay-nantes.jpg"),
        bonneReponse: "reponse3",
        reponses: [
            "Jérémy Lafontaine",
            "Jean-Paul Bernardin",
            "Philippe Ramette",
            "Christelle Monjeau"
        ],
        indice: "Né en 1961 à Auxerre, c'est un artiste et plasticien français. Il vit et travaille à Paris",
    },
    {
        id: 3,
        numero: 3,
        intitule: "Quel est le nom de cette tour ?",
        image: require(imgPath + "tour-lu.jpg"),
        bonneReponse: "reponse2",
        reponses: [
            "Fausse rep 1",
            "Tour Lu",
            "Fausse rep 2",
            "Fausse rep 3"
        ],
        indice: "Description indice lorem ipsum",
    }
];