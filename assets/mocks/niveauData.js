var imgPath = "../img/questions/";

export const niveauData = [
    {
        id: 1,
        nom: "Nantes",
        difficulte: 1,
        nbPieces: 50,
        locked: false,
        alreadyWon: false ,
        questions: [
            {
                numero: 1,
                intitule: "Quel est ce lieu ?",
                image: require(imgPath + "chateau-duc-bretagne.png"),
                reponses: [
                    "Le château des Ducs de Bretagne",
                    "Le château de Versailles",
                    "La Tour LU",
                    "Le Panthéon"
                ],
                bonneReponse: 0,
                indice: "Il est situé en Loire Atlantique et est classé monument historique depuis 1840. C’est aujourd’hui un musée d’histoire.",
                explication: "Integer varius luctus eros, sed pharetra eros dapibus in. Nullam hendrerit velit dui, efficitur ultrices nunc commodo vel. Nunc vitae arcu elementum, ornare elit eu, cursus libero. Duis vitae sagittis massa. Nullam aliquet interdum mauris eu eleifend. Pellentesque a bibendum orci, facilisis ultricies justo. Maecenas eu suscipit felis, cursus mattis lacus. In vestibulum, ipsum in dignissim hendrerit, nulla magna posuere purus, nec lobortis enim dui eu tortor. Phasellus lacinia placerat malesuada. Aenean id tempus mauris. Nullam suscipit malesuada purus, convallis feugiat turpis.",
                valeur: 20
            },
            {
                numero: 2,
                intitule: "Qui est l'artiste qui a réalisé cette statue ?",
                image: require(imgPath + "statue-bouffay-nantes.jpg"),
                reponses: [
                    "Jérémy Lafontaine",
                    "Jean-Paul Bernardin",
                    "Philippe Ramette",
                    "Christelle Monjeau"
                ],
                bonneReponse: 2,
                indice: "Né en 1961 à Auxerre, c'est un artiste et plasticien français. Il vit et travaille à Paris",
                explication: "Integer varius luctus eros, sed pharetra eros dapibus in. Nullam hendrerit velit dui, efficitur ultrices nunc commodo vel. Nunc vitae arcu elementum, ornare elit eu, cursus libero. Duis vitae sagittis massa. Nullam aliquet interdum mauris eu eleifend. Pellentesque a bibendum orci, facilisis ultricies justo. Maecenas eu suscipit felis, cursus mattis lacus. In vestibulum, ipsum in dignissim hendrerit, nulla magna posuere purus, nec lobortis enim dui eu tortor. Phasellus lacinia placerat malesuada. Aenean id tempus mauris. Nullam suscipit malesuada purus, convallis feugiat turpis.",
                valeur: 20
            },
            {
                numero: 3,
                intitule: "Quel est le nom de cette tour ?",
                image: require(imgPath + "tour-lu.jpg"),
                reponses: [
                    "Fausse rep 1",
                    "Tour Lu",
                    "Fausse rep 2",
                    "Fausse rep 3"
                ],
                bonneReponse: 1,
                indice: "Description indice lorem ipsum",
                explication: "Integer varius luctus eros, sed pharetra eros dapibus in. Nullam hendrerit velit dui, efficitur ultrices nunc commodo vel. Nunc vitae arcu elementum, ornare elit eu, cursus libero. Duis vitae sagittis massa. Nullam aliquet interdum mauris eu eleifend. Pellentesque a bibendum orci, facilisis ultricies justo. Maecenas eu suscipit felis, cursus mattis lacus. In vestibulum, ipsum in dignissim hendrerit, nulla magna posuere purus, nec lobortis enim dui eu tortor. Phasellus lacinia placerat malesuada. Aenean id tempus mauris. Nullam suscipit malesuada purus, convallis feugiat turpis.",
                valeur: 20
            }
        ]
    },
    {
        id: 2,
        nom: "Lyon",
        difficulte: 1,
        nbPieces: 50,
        locked: false,
        alreadyWon: false,
        questions: [
            {
                numero: 1,
                intitule: "Quel est le nom de cette tour ?",
                image: require(imgPath + "tour-lu.jpg"),
                reponses: [
                    "Fausse rep 1",
                    "Tour Lu",
                    "Fausse rep 2",
                    "Fausse rep 3"
                ],
                bonneReponse: 1,
                indice: "Description indice lorem ipsum",
                explication: "Integer varius luctus eros, sed pharetra eros dapibus in. Nullam hendrerit velit dui, efficitur ultrices nunc commodo vel. Nunc vitae arcu elementum, ornare elit eu, cursus libero. Duis vitae sagittis massa. Nullam aliquet interdum mauris eu eleifend. Pellentesque a bibendum orci, facilisis ultricies justo. Maecenas eu suscipit felis, cursus mattis lacus. In vestibulum, ipsum in dignissim hendrerit, nulla magna posuere purus, nec lobortis enim dui eu tortor. Phasellus lacinia placerat malesuada. Aenean id tempus mauris. Nullam suscipit malesuada purus, convallis feugiat turpis.",
                valeur: 20
            }
        ]
    }
    /* {
        id: 3,
        nom: "Niveau 3",
        difficulte: 2,
        questions: [],
        nbPieces: 50
    },
    {
        id: 4,
        nom: "Niveau 4",
        difficulte: 2,
        questions: [],
        nbPieces: 50
    },
    {
        id: 5,
        nom: "Niveau 5",
        difficulte: 3,
        questions: [],
        nbPieces: 50
    } */
];