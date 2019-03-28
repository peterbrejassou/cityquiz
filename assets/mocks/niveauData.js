import { questionData } from './questionData';

export const niveauData = [
    {
        id: 1,
        nom: "Niveau 1",
        difficulte: 1,
        questions: [
            questionData[0],
            questionData[1],
            questionData[2],
        ],
        nbPieces: 50
    },
    {
        id: 2,
        nom: "Niveau 2",
        difficulte: 1,
        questions: [],
        nbPieces: 50
    },
    {
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
    }
];