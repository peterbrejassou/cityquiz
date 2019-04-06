const initialState = { 
    users: undefined,
    niveaux: undefined
};

export default function dataReducer(state = initialState, action) {
    let nextState;

    switch (action.type) {
        case 'INSERT_USER_DATA_FROM_MOCK':
            nextState = {
                ...state,
                users: action.value
            };
            return nextState;

        case 'INSERT_NIVEAU_DATA_FROM_MOCK':
            nextState = {
                ...state,
                niveaux: action.value
            };
            return nextState;

        case 'UPDATE_STATUS_ALREADYWON_LEVEL':
            state.niveaux[action.value-1].alreadyWon = true;
            return state;

        case 'ADD_NEW_USER':
            state.users.push(action.value);
            return state;

        case 'UPDATE_PASSWORD_USER':
            state.users[action.user.id - 1].password = action.newPassword;
            return state;

        case 'UPDATE_PROFILE_USER':
            console.log(action);
            state.users[action.user.id - 1].photo = action.photo;
            state.users[action.user.id - 1].username = action.username;
            state.users[action.user.id - 1].nom = action.nom;
            state.users[action.user.id - 1].prenom = action.prenom;
            return state;

        case 'ADD_NEW_NIVEAU':
            state.niveaux.push(action.value);
            return state;

        case 'ADD_NEW_LIEU':
            state.niveaux[action.niveau.id - 1].questions.push(action.lieu);
            return state;

        default:
            return state;
    }
}