import firebase from '../plugins/firebase';

// const userId = localStorage.getItem('user_id');

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
          resolve(Object.values(snapshot.val()));
        }, err => {
          reject(err);
        });
      })
    }
    else {
      return new Promise((resolve, reject) => {
        firebase.database().ref(endpoint).on('value', snapshot => {
          resolve(Object.values(snapshot.val()));
        }, err => {
          reject(err);
        });
      })
    }
  }
}