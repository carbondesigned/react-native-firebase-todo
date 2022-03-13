import firebase from "firebase/app";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDFwyTGkVCfDpHpuCBts3wFT1ep3gkSrzs",
  authDomain: "react-native-todo-aece4.firebaseapp.com",
  projectId: "react-native-todo-aece4",
  storageBucket: "react-native-todo-aece4.appspot.com",
  messagingSenderId: "202956229742",
  appId: "1:202956229742:web:9757d1cf64f32a1ba52a7f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
