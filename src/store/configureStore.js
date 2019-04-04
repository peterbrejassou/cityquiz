import { createStore, combineReducers } from 'redux';
import userConnectedReducer from './reducers/userConnectedReducer';
import dataReducer from './reducers/dataReducer';

var rootReducer = combineReducers({ userConnectedReducer, dataReducer })

export default createStore(rootReducer);