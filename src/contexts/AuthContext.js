import React, { useContext, useEffect, useState } from "react";
import {
  setPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  browserSessionPersistence,
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
  async function login({ mail, password, remember }) {
    try {
      if (remember) {
        return await signInWithEmailAndPassword(auth, mail, password);
      } else {
        await setPersistence(auth, browserSessionPersistence);
        return await signInWithEmailAndPassword(auth, mail, password);
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      return false;
    }
  }

  // Esci (firebase authentication)
  async function logout() {
    try {
      await signOut(auth);
      console.log("Logged out");
      return true;
    } catch (error) {
      console.error(error.message);
    }
    // signOut(auth)
    //   .then(() => {
    //     // Sign-out successful.
    //     console.log("Logged out");
    //     return true;
    //   })
    //   .catch((error) => {
    //     // An error happened.
    //     console.error(error.message);
    //   });
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
