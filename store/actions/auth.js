import { Proxy } from '../../proxies';
import AuthProxy from '../../proxies/AuthProxy';

export default {
  login: (payload) => {
    return async (dispatch) => {
      localStorage.setItem('user', payload.uid);
      dispatch({ type: 'LOGIN', payload: payload.uid });
    }
  }
};
