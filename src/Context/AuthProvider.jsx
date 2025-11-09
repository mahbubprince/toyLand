import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/Firebase.config";

// const signInWithEmailAndPasswordFunc = ({ email, password }) => {
//   return signInWithEmailAndPassword(auth, email, password);
// };

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [navLoading,setNavLoading] =useState(false)

  const signInWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUserWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleProviderFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubProviderFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateProfilefunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const info = {
    user,
    setUser,
    signInWithEmailAndPasswordFunc,
    createUserWithEmailAndPasswordFunc,
    googleProviderFunc,
    githubProviderFunc,
    updateProfilefunc,
    logOut,
    setLoading,
    loading,
    setNavLoading,
    navLoading,
  };

  return <AuthContext value={info}>{children}</AuthContext>;
};

export default AuthProvider;
