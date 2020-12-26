import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDYEZF9UYUkEDLhArVzPbjwBFACQ3itS5Y",
    authDomain: "my-contact-form-53202.firebaseapp.com",
    projectId: "my-contact-form-53202",
    storageBucket: "my-contact-form-53202.appspot.com",
    messagingSenderId: "7709668430",
    appId: "1:7709668430:web:b5264e41a8e10fe9a7bf1f"
})

const db = firebaseApp.firestore();

export { db };