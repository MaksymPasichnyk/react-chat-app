import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Chat from "./components/Chat";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInAnonymously, signInWithEmailAndPassword } from "firebase/auth";
import { Routes, Route, Link } from "react-router-dom";

firebase.initializeApp({
  // config
  apiKey: "AIzaSyDscVE9sOtTmo58zGwNvRn-oWdCcibVxvA",
  authDomain: "chat-app-4c75d.firebaseapp.com",
  projectId: "chat-app-4c75d",
  storageBucket: "chat-app-4c75d.appspot.com",
  messagingSenderId: "163587997954",
  appId: "1:163587997954:web:b265f813874cc13016021b",
  measurementId: "G-RY8H6J3H91",
});

const auth = firebase.auth();

function App(props) {
  const [user] = useAuthState(auth);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
 
  const signInAsAnonymus = () => {
    signInAnonymously(auth).then((user) => console.log(user));
  };

	

  return (
    <div className="app">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            !user && (
              <SignIn
                signInWithGoogle={signInWithGoogle}
                signInAsAnonymus={signInAsAnonymus}
              />
            )
          }
        />
      </Routes>
      {user && <Chat />}
    </div>
  );
}

export default App;
