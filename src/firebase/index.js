import firebase from 'firebase/app';
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyC0UbzbzCT2zhXLsHOJgtIBik5LBQHYvLE",
    authDomain: "ecommerce-5ff0d.firebaseapp.com",
    projectId: "ecommerce-5ff0d",
    storageBucket: "ecommerce-5ff0d.appspot.com",
    messagingSenderId: "550059867881",
    appId: "1:550059867881:web:58acaf1c278b18ef7bba78"
})

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app);
}