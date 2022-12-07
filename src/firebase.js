// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "hureechain.firebaseapp.com",
  databaseURL: process.env.REACT_URI_DATABASE,
  projectId: "hureechain",
  storageBucket: "hureechain.appspot.com",
  messagingSenderId: "938538313737",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-4XVTQV1MB4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export default storage;