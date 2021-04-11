import firebase from 'firebase';

// Made with guidance from :
// https://www.youtube.com/watch?v=cFgoSrOui2M

/**
 * A config method to handle all the credentials to connect
 * to our firebase project.
 */
const firebaseConfig = {
  apiKey: 'AIzaSyCaVXsW8SaK3pNPZ4Igaf2o7ZatdwCBlp4',
  authDomain: 'cooks-books-app.firebaseapp.com',
  databaseURL: 'https://cooks-books-app-default-rtdb.firebaseio.com',
  projectId: 'cooks-books-app',
  storageBucket: 'cooks-books-app.appspot.com',
  messagingSenderId: '5777053309',
  appId: '1:5777053309:web:b5c9aa32a44773fca38314',
  measurementId: 'G-JJN7SC1CT2',
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
