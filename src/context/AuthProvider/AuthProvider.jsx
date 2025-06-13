import React, { useState } from 'react';
import { AuthContext } from '../AuthContext/Authcontext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logOut = () => {
    console.log("log out");
    };
    
  const loginUser = () => {
    const user = {
      name: "shakil",
      email: "shakil@gmail.com"
    }
    setUser(user)
  }
    

  const userInfo = {
    user,
    setUser,
    logOut,
    loginUser
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
