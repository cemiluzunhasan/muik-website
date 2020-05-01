  
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { auth, global } from './reducers';

const reducer = combineReducers({ auth, global });
const store = createStore(reducer, compose(applyMiddleware(thunk), (typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f)));

export default store;