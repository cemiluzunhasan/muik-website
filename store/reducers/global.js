import _ from 'lodash';
import { sortMembers } from '../../utils/formatData';
import state from '../state/global';

const initialState = state;

export default (state = initialState, action) => {
  const { key, data, error, index } = action.payload || { };
  let obj = state[key];

  switch(action.type) {
    case 'GLOBAL_REQUEST':
      _.set(state, key, { ...obj, loading: true, error: null });
      console.log("GLOBAL_REQUEST", { ...state });
      return { ...state };
    case 'GLOBAL_SUCCESS':
      if (key === 'members') {
        const sortedData = sortMembers(data);  
        _.set(state, key, { ...obj, loading: false, data: sortedData, error: null });
      } else {
        _.set(state, key, { ...obj, loading: false, data, error: null });
      }
      console.log("GLOBAL_SUCCESS",  { ...state });
      return { ...state };
    case 'GLOBAL_ERROR':
      _.set(state, key, { ...obj, loading: false, error: error });
    default:
      return { ...state };
  }
}