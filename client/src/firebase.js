// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDataBase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzW7K5r6z8TIWk-Y5MMBDHsfFnW3Vq9Os",
  authDomain: "thediggingpit.firebaseapp.com",
  projectId: "thediggingpit",
  storageBucket: "thediggingpit.appspot.com",
  messagingSenderId: "769486102907",
  appId: "1:769486102907:web:1c72a9b8fe37cc1bb81dde",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const database = getDataBase(app);

const storage = getStorage(app);

export { auth, database, storage };
