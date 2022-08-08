import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Chat from "./components/Chat";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Routes, Route } from "react-router-dom";
import { signInWithGoogle, loginAsGuest, auth } from "./firebase/firebase";
import ResetPassword from "./components/ResetPassword";

function App(props) {
  const [user] = useAuthState(auth);

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
                signInAsAnonymus={loginAsGuest}
              />
            )
          }
        />
				<Route 
					path="/reset-password"
					element={<ResetPassword />}
				/>
      </Routes>
      {user && <Chat />}
    </div>
  );
}

export default App;
