import firebase from '../plugins/firebase';

class AuthProxy {
  constructor(form) {
    this.form = form;
  }
  login() {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(this.form.username, this.form.password).then((res) => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }
  logout() {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut().then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    })
  }
  checkLogin() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        user ? resolve(user) : reject(null);
      })
    })
  }
}

export default AuthProxy;
