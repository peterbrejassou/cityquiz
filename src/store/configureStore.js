import { createStore, combineReducers } from 'redux';
import userConnectedReducer from './reducers/userConnectedReducer';
import dataReducer from './reducers/dataReducer';

// On combine les 2 réducers ensemble
var rootReducer = combineReducers({ userConnectedReducer, dataReducer })

export default createStore(rootReducer);