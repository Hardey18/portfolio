import firebase from 'firebase';
require('dotenv').config();

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIND_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
})

const db = firebaseApp.firestore();

export { db };