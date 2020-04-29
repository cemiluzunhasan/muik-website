import _ from 'lodash';
import state from '../state/auth';

const initialState = state;

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return { ...state, user: { uid: action.payload } };
    case 'AUTH_LOGIN_SUCCESS':
      return { ...state };
    case 'AUTH_LOGIN_ERROR':
      return { ...state }; 
    default:
      return { ...state };   
  }
}