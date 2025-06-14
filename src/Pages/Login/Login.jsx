import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/Authcontext';
import { useNavigate } from 'react-router';

const Login = () => {
  const { setUser, loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        console.log(result.user);
        navigate('/')
        setUser(result.user)
      })
  }



    return (
      <div>
        Login
        <button onClick={loginUser} className='btn'>Login</button>
        <button onClick={handleGoogleLogin} className='btn'>Login With Google</button>
      </div>
    );
};

export default Login;