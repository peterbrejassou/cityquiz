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
                    "La tour de Nantes",
                    "La tour Lu",
                    "La tour Fabre",
                    "La tour de Bretagne"
                ],
                bonneReponse: 1,
                indice: "Elle porte le nom d'une célèbre marque de biscuit.",
                explication: "En 1909 Louis Lefèvre-Utile, le célèbre biscuitier nantais, fait édifier son usine de fabrication sur les bords de Loire, face au château des ducs de Bretagne. L’entrée est gardée par deux tours dessinées par l'architecte Bluyssen. Il ne reste aujourd'hui qu'un grand arc de cercle le long du canal Saint-Félix et une tour, orpheline de sa jumelle, décapitée à la fin des années 1960 et rénovée en 1997 avec la pose d’un nouveau dôme.",
                valeur: 20
            }
        ]
    },
    {
        id: 2,
        nom: "Paris",
        difficulte: 2,
        nbPieces: 50,
        locked: false,
        alreadyWon: false,
        questions: [
            {
                numero: 1,
                intitule: "Quel est le point naturel le plus haut de Paris ?",
                image: require(imgPath + "plus-haut.jpg"),
                reponses: [
                    "La rue du Télégraphe à Belleville",
                    "Le Cimetière du Calvaire à Montmartre",
                    "La Basilique du Sacré Coeur",
                    "La Cascade des Buttes Chaumont"
                ],
                bonneReponse: 1,
                indice: "Lisez-bien la question, chaque mot compte...",
                explication: "Point naturel exclut le magasin H&M, la basilique du sacré-coeur et la cascade des Buttes Chaumont. Le cimetière du Calvaire qui jouxte l'Eglise St Pierre de Montmartre culmine à 131 m, mais la rue du Télégraphe est à 128,5 m.",
                valeur: 20
            },
            {
                numero: 2,
                intitule: "Qui est le père du metro parisien ?",
                image: require(imgPath + "metro-paris.jpg"),
                reponses: [
                    "Louis Renault",
                    "Le Baron Haussman",
                    "Napoleon Bonaparte",
                    "Fulgence Bienvenue"
                ],
                bonneReponse: 3,
                indice: "Son prénom, d'origine latine, est fêté le 1e Janvier.",
                explication: "Fulgence Bienvenue était un ingénieur qui s'est d'abord occupé d'eau puis de chemin de fer puis a conçu le métro. Montparnasse-Bienvenue c'est pour lui!",
                valeur: 20
            },
            {
                numero: 3,
                intitule: "D'où vient le nom Paris ?",
                image: require(imgPath + "logo-paris.jpg"),
                reponses: [
                    "De la tribu gauloise les Parisii",
                    "D'une déformation du mot prairie",
                    "Du nom d'un hippodrome",
                    "De la famille Hilton"
                ],
                bonneReponse: 0,
                indice: "Cela a un rapport avec Astérix et Obélix.",
                explication: "C'est en effet une des 98 tribus gauloises, les Parisii, qui dominaient l'endroit quand Jules César débarqua en 52 av JC.",
                valeur: 20
            }
        ]
    },
    {
        id: 3,
        nom: "Lyon",
        difficulte: 1,
        nbPieces: 50,
        locked: false,
        alreadyWon: false,
        questions: [
            {
                numero: 1,
                intitule: "Que fête-t-on le 8 décembre à Lyon ?",
                image: require(imgPath + "fete-lumieres.jpg"),
                reponses: [
                    "La libération de Lyon",
                    "Thanksgiving",
                    "La fête des lumières",
                    "Le carnaval"
                ],
                bonneReponse: 0,
                indice: "L'image en elle même est un indice.",
                explication: "La Fête des Lumières s'appuie sur la fête religieuse dite fête du 8 décembre, fête de l'immaculée conception, Illuminations ou encore fête de la Vierge Marie. C'est devenu une manifestation populaire, initiée par la ville de Lyon en 1989, qui se tient chaque année pendant quatre jours autour du 8 décembre, ",
                valeur: 20
            }
        ]
    },
    {
        id: 4,
        nom: "Bordeaux",
        difficulte: 1,
        nbPieces: 50,
        locked: false,
        alreadyWon: false,
        questions: [
            {
                numero: 1,
                intitule: "Quelle est la situation de Bordeaux ?",
                image: require(imgPath + "fete-lumieres.jpg"),
                reponses: [
                    "Au bord d'un fleuve côtier",
                    "Au bord d'un estuaire",
                    "Au milieu d'un delta",
                    "A côté d'une zone montagneuse"
                ],
                bonneReponse: 1,
                indice: "Bordeaux est en Gironde.",
                explication: "L'estuaire de la Gironde ou Gironde est un estuaire du sud-ouest de la France dont les eaux baignent deux départements : la Gironde (avec le Blayais sur la rive droite et le Médoc sur la rive gauche) et la Charente-Maritime.",
                valeur: 20
            }
        ]
    },
    {
        id: 5,
        nom: "Marseille",
        difficulte: 1,
        nbPieces: 50,
        locked: false,
        alreadyWon: false,
        questions: [
            {
                numero: 1,
                intitule: "De quel département Marseille est-elle le chef-lieu ?",
                image: require(imgPath + "fete-lumieres.jpg"),
                reponses: [
                    "Bouches-du-Rhône",
                    "Haute-Alpes",
                    "Ardèches",
                    "Allier"
                ],
                bonneReponse: 0,
                indice: "C'est le troisième département le plus peuplé de France.",
                explication: "Le département des Bouches-du-Rhône est situé en région Provence-Alpes-Côte d'Azur. Ses habitants sont appelés les Bucco-Rhodaniens. L'Insee et la Poste lui attribuent le code 13.",
                valeur: 20
            }
        ]
    },
];