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
            console.log(action.value);
            state.users.push(action.value);
            return state;

        default:
            return state;
    }
}