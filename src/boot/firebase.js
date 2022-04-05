import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhw7U3nDHz0HH93NZQzQn7_y0wAmyr_hE",
  authDomain: "tictactoe-5e879.firebaseapp.com",
  projectId: "tictactoe-5e879",
  storageBucket: "tictactoe-5e879.appspot.com",
  messagingSenderId: "379243719547",
  appId: "1:379243719547:web:a6ec0e5efc78eb90826bde",
  measurementId: "G-KJ11SH5P71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export {db}

