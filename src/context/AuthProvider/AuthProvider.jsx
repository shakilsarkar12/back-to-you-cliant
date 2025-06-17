import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/Authcontext';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';
import axios from 'axios';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  const logoutUser = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscrobe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
      if (currentUser?.email) {
        const userData = { email: currentUser.email }
        axios.post("http://localhost:3000/jwt", userData, {
          withCredentials: true
        })
          .then()
        .catch(error=>console.log(error))
      }
    });
    return () => unsubscrobe();
  }, [])
  

  const userInfo = {
    user,
    loading,
    setLoading,
    setUser,
    googleLogin,
    logoutUser,
    createUser,
    loginUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
