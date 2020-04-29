  
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { auth, global } from './reducers';

const reducer = combineReducers({ auth, global });
const store = createStore(reducer, applyMiddleware(thunk));

export default store;