import firebase from 'firebase';

// Made with guidance from :
// https://www.youtube.com/watch?v=cFgoSrOui2M

/**
 * A config method to handle all the credentials to connect
 * to our firebase project.
 */
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;