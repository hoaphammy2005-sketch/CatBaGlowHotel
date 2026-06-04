import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDW6BXs3p5JLb60K1tqdigZ85xg08IfiTE",
    authDomain: "catbaglowhotel-d83ad.firebaseapp.com",
    projectId: "catbaglowhotel-d83ad",
    storageBucket: "catbaglowhotel-d83ad.firebasestorage.app",
    messagingSenderId: "1097745888230",
    appId: "1:1097745888230:web:52263e505e4fb262401c27",
    measurementId: "G-MN8QFP5GCK"
  };


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }

