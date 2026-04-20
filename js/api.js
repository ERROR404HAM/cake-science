// Firebase API functions

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase API functions
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
};

export const signOut = () => {
    return auth.signOut();
};

export const getUserData = (userId) => {
    return firestore.collection('users').doc(userId).get();
};

export const saveUserData = (userId, data) => {
    return firestore.collection('users').doc(userId).set(data);
};
