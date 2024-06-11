import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../Services/firebase";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({}); // Create an authentication context

  // Effect to handle authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  // Function to handle user sign up
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password); // Create a user document in Firestore with an empty favorite shows array
    setDoc(doc(db, "users", email), {
      favShows: [],
    });
  }

  // Function to handle user login
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  // Function to handle user logout
  function logOut() {
    return signOut(auth);
  }

  // Provide authentication context to child components
  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use the authentication context
export function UserAuth() {
  return useContext(AuthContext);
}
