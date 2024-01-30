import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut} from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDcn3lnSF1guEXyTFub35c54I1iAoHcgUI",
  authDomain: "web40-fbd49.firebaseapp.com",
  projectId: "web40-fbd49",
  storageBucket: "web40-fbd49.appspot.com",
  messagingSenderId: "136712643464",
  appId: "1:136712643464:web:2786d45ef395b81312903d"
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase

var auth = getAuth(app);

export { auth, signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut};