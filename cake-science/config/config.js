const firebaseConfig = {
  apiKey: "AIzaSyAgPSTGMMieM25Ll85TW9t4awO8xh7Wm84",
  authDomain: "cake-science.firebaseapp.com",
  databaseURL: "https://cake-science-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cake-science",
  storageBucket: "cake-science.firebasestorage.app",
  messagingSenderId: "1011804836961",
  appId: "1:1011804836961:web:ed770ee21a38bf2f864620",
  measurementId: "G-FR71JRSWND"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();

console.log('✅ Firebase initialized');