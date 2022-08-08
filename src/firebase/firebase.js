import { set } from "date-fns";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInAnonymously,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
	updateProfile
} from "firebase/auth";
import {
  getFirestore,
  query,
  orderBy,
  limit,
  getDocs,
  collection,
  where,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
const db = getFirestore(app);
const storage = getStorage(app);

const googleProvider = new GoogleAuthProvider();

// functions
const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleProvider);
    const user = response.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        displayName: user.displayName,
        authProvider: "google",
        email: user.email,
        photoUrl: user.photoURL,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

const loginAsGuest = async () => {
  try {
    await signInAnonymously(auth);
  } catch (err) {
    console.error(err);
  }
};

const logInWithEmailAndPassword = async (email, password, setError) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    setError("Login or Password is invalid");
  }
};

const registerWithEmailAndPassword = async ({ username, email, password }) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

		updateProfile(user, {
			displayName: username,
		})
  } catch (err) {
    console.error(err);
  }
};

const sendPasswordReset = async (email, setErrorText, setStatus) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
		setErrorText('');
		setStatus(true);
  } catch (err) {
    console.error(err);
    setErrorText('User with current Email is not found');
		setStatus(false);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  registerWithEmailAndPassword,
  logInWithEmailAndPassword,
  loginAsGuest,
  sendPasswordReset,
  logout,
  collection,
  query,
  orderBy,
  limit,
  serverTimestamp,
  addDoc,
  where,
	storage,
};
