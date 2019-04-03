const initialState = { 
    userConnected: null
};

export default function userReducer(state = initialState, action) {
    let nextState;
    
    switch (action.type) {
        case 'CONNECT_USER':
            nextState = {
                userConnected: action.value
            };
            return nextState;

        case 'DISCONNECT_USER':
            nextState = {
                userConnected: action.value
            };
            return nextState;
            
        default:
            return state;
    }

}