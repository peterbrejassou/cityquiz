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
            var userRecupere = state.users.find((user) => {
                return user === action.user
            });
            state.users[userRecupere.id - 1].password = action.newPassword;
            return state;

        default:
            return state;
    }
}