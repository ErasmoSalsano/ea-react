import React, { useContext, useEffect, useState } from "react";
import {
  setPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  browserSessionPersistence,
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
  const [firstAcess, setFirstAcess] = useState(null)

  //festivity
    const currentTime = new Date()
    const currDay = currentTime.getDate()
    const currentM = currentTime.getMonth()
    const festivity = currDay >= 15 && currDay <= 31 && currentM === 11;

  // Crea utente (firebase authentication)
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Accedi (firebase authentication)
  async function login({ mail, password, remember }) {
    try {
      if (!remember) {
        await setPersistence(auth, browserSessionPersistence);
      }
      const res = await signInWithEmailAndPassword(auth, mail, password);
      
      festivity && setFirstAcess(true)

      // Signed in
      console.log("Logged in");
      return res;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      return false;
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
  // auth.onAuthStateChanged((user) => {
  //   setCurrentUser(user);
  // });

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
    festivity,
    firstAcess,
    setFirstAcess
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
