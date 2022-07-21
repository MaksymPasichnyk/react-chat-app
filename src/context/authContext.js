import React, {useContext} from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthContext = React.createContext();

function AuthContextProvider(props) {
  const auth = firebase.auth();
	const { createUserWithEmailAndPassword } = auth;
  const firestore = firebase.firestore();
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt").limit(25);

	return (
		<AuthContext.Provider value={{auth, firestore, messageRef, query, createUserWithEmailAndPassword}} >
			{props.children}
		</AuthContext.Provider>
	)
}

function useAuthValue() {
	return useContext(AuthContext)
}




export {AuthContextProvider, AuthContext, useAuthValue}
