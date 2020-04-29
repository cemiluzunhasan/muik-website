import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBGGKFhPimyCXuVxDz_D5B5VJL9XMOzliQ",
  authDomain: "blog-test-ccf78.firebaseapp.com",
  databaseURL: "https://blog-test-ccf78.firebaseio.com",
  projectId: "blog-test-ccf78",
  storageBucket: "blog-test-ccf78.appspot.com",
  messagingSenderId: "346254762751",
  appId: "1:346254762751:web:3c886914465963af7222ca",
  measurementId: "G-GHPNEQCNWJ"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

export default firebase;