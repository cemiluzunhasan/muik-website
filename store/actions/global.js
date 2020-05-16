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
          message.success('Başarılı bir şekilde eklendi');
          return true;
        }).catch(err => {
          dispatch({ type: 'GLOBAL_ERROR', payload: { key: payload.key, error: err }});
        });
      }
    } else {
      return async (dispatch) => {
        payload.key && dispatch({ type: 'GLOBAL_REQUEST', payload });
        new Proxy().addData(payload.url, payload.data).then(res => {
          message.success('Başarılı bir şekilde eklendi');
          window.location.replace('/dashboard/articles/list');
        }).catch(err => {
          message.error('Eklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin');
        });
      }
    }
  },
  deleteData: (payload) => {
    const { endpoint, id } = payload;
    return async (dispatch) => {
      new Proxy().deleteData(endpoint, id).then(res => {
        message.success("Başarılı bir şekilde silindi");
        window.location.reload();
      }).catch(err => {
        message.error("Silinirken bir hata oluştu");
      });
    }
  }
};
