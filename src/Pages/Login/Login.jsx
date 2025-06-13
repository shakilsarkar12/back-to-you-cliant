import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/Authcontext';

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    return (
      <div>
        Login
        <button onClick={loginUser} className='btn'>Login</button>
      </div>
    );
};

export default Login;