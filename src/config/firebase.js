// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export function StartFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyCutkCXM4HiCEByse1C0jM08TgbcibC-54",
    authDomain: "isbandstillalive.firebaseapp.com",
    databaseURL: "https://isbandstillalive-default-rtdb.firebaseio.com",
    projectId: "isbandstillalive",
    storageBucket: "isbandstillalive.appspot.com",
    messagingSenderId: "1099397116637",
    appId: "1:1099397116637:web:ff11d98cdf5b25a9746134",
  };
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}
