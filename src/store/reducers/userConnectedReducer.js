const initialState = { 
    userConnected: undefined
};

export default function userConnectedReducer(state = initialState, action) {
    let nextState;
    
    switch (action.type) {
        case 'LOG_USER':
            nextState = { ...state, userConnected: action.value };
            return nextState;

        case 'DELOG_USER':
            var userDefault = { prenom: '', nom: '' }
            nextState = {...state, userConnected: userDefault };
            return nextState;

        case 'UPDATE_POINTS_USER':
            state.userConnected.nbPoints += action.value;
            return state;

        case 'UPDATE_PIECES_USER':
            state.userConnected.nbPieces += action.value;
            return state;

        case 'UPDATE_PROFILE_USER':
            state.userConnected.photo = action.photo;
            state.userConnected.username = action.username;
            state.userConnected.nom = action.nom;
            state.userConnected.prenom = action.prenom;
            return state;

        default:
            return state;
    }
}