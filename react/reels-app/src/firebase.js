// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3M1TeR6RYvbo-ttjY6jSzTKmMNvzRs0g",
  authDomain: "class-demo-4730e.firebaseapp.com",
  projectId: "class-demo-4730e",
  storageBucket: "class-demo-4730e.appspot.com",
  messagingSenderId: "354011581832",
  appId: "1:354011581832:web:751fdb8bb4fe15e7ac7e3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export const db  = getFirestore(app);