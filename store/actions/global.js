import { Proxy } from '../../proxies';
import { message } from 'antd';

export default {
  getData: (payload) => {
    return async (dispatch) => {
      payload.key && dispatch({ type: 'GLOBAL_REQUEST', payload });
      new Proxy().getData(payload.url).then(response => {
        dispatch({ type: 'GLOBAL_SUCCESS', payload: { key: payload.key, data: response }});
      }).catch(err => {
        dispatch({ type: 'GLOBAL_ERROR', payload: { key: payload.key, error: err }});
      });
    }
  },
  addData: (payload, customId) => {
    if (customId) {
      return async (dispatch) => {
        payload.key && dispatch({ type: 'GLOBAL_REQUEST', payload });
        new Proxy().addData(payload.url, payload.data, customId).then(res => {
          // dispatch({ type: 'GLOBAL_SUCCESS', payload: { key: payload.key, data: res }});
        }).catch(err => {
          dispatch({ type: 'GLOBAL_ERROR', payload: { key: payload.key, error: err }});
        });
      }
    } else {
      return async (dispatch) => {
        payload.key && dispatch({ type: 'GLOBAL_REQUEST', payload });
        new Proxy().addData(payload.url, payload.data).then(res => {
          message.success('Üye başarılı bir şekilde eklendi');
        }).catch(err => {
          message.success('Üye eklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin');
        });
      }
    }
  },
  updateData: () => {

  },
  deleteData: () => {

  }
};
