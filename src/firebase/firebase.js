import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDscVE9sOtTmo58zGwNvRn-oWdCcibVxvA",
  authDomain: "chat-app-4c75d.firebaseapp.com",
  projectId: "chat-app-4c75d",
  storageBucket: "chat-app-4c75d.appspot.com",
  messagingSenderId: "163587997954",
  appId: "1:163587997954:web:b265f813874cc13016021b",
  measurementId: "G-RY8H6J3H91",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}
