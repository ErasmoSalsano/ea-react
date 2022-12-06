import React, { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // Crea utente (firebase authentication)
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Accedi (firebase authentication)
  async function login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Signed in
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  }

  // Esci (firebase authentication)
  function logout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Logged out");
      })
      .catch((error) => {
        // An error happened.
        console.error("Carcere");
      });
  }

  // Imposta utente corrente (firebase authentication)
  auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
