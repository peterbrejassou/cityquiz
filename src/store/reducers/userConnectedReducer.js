const initialState = { 
    userConnected: undefined
};

export default function userConnectedReducer(state = initialState, action) {
    let nextState;
    
    switch (action.type) {
        case 'LOG_USER':
            nextState = {
                ...state,
                userConnected: action.value
            };
            return nextState;

        case 'DELOG_USER':
            var userDefault = {
                prenom: '',
                nom: ''
            }

            nextState = {
                ...state,
                userConnected: userDefault
            };

            return nextState;

        case 'UPDATE_POINTS_USER':
            state.userConnected.nbPoints += action.value;

        case 'UPDATE_PIECES_USER':
            state.userConnected.nbPieces += action.value;

        default:
            return state;
    }

}