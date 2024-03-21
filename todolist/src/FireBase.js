// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdx4gq9ztsD3xmRxJa3yfagrZgHy-4xeg",
  authDomain: "todolist-81ab1.firebaseapp.com",
  projectId: "todolist-81ab1",
  storageBucket: "todolist-81ab1.appspot.com",
  messagingSenderId: "242963220568",
  appId: "1:242963220568:web:e5f544313d2ab25297222d",
  measurementId: "G-P7RDW9WTJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);