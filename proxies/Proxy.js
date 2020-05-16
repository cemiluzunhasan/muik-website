import firebase from '../plugins/firebase';

export default class Proxy {
  constructor(endpoint, parameters = { }) {
    this.endpoint = endpoint;
    this.parameters = parameters;
  }
  
  addData(endpoint, body, customId) {
    if (customId) {
      return new Promise((resolve, reject) => {
        firebase.database().ref(endpoint).child(customId).set(body).then(res => {
          resolve(body);
        }).catch(err => {
          reject(err);
        });
      });
    } else {
      return new Promise((resolve, reject) => {
        firebase.database().ref(endpoint).push(body).then(() => {
          resolve(body);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }

  getData(endpoint, id = null) {
    if (id) {
      return new Promise((resolve, reject) => {
        firebase.database().ref(endpoint).orderByChild('id').equalTo(id).on('value', snapshot => {
          const res = snapshot.val();
          if (res) {
            resolve(Object.values(res));
          }
        }, err => {
          reject(err);
        });
      });
    }
    else {
      return new Promise((resolve, reject) => {
        firebase.database().ref(endpoint).on('value', snapshot => {
          const res = snapshot.val();
          if (res) {
            resolve(Object.values(res));
          } 
        }, err => {
          reject(err);
        });
      });
    }
  }

  getSingleData(endpoint, id) {
    return new Promise((resolve, reject) => {
      firebase.database().ref(endpoint + "/" + id).on('value', snapshot => {
        const res = snapshot.val();
        if (res) {
          resolve(res);
        } 
      }, err => {
        reject(err);
      });
    });
  }

  deleteData(endpoint, id) {
    return new Promise((resolve, reject) => {
      firebase.database().ref(`${endpoint}/${id}`).remove().then(res => {
        firebase.storage().ref(endpoint).child(id).delete();
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    });
  }

  deleteStorage(endpoint, id) {
    return new Promise((resolve, reject) => {
      firebase.storage().ref(endpoint).child(id).delete().then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    });
  }
  
}