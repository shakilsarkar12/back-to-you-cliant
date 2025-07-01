import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/Authcontext';

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='text-center w-fit mx-auto mt-28'>
            profile 
            <img src={user?.photoURL} alt={user?.displayName} />
        </div>
    );
};

export default Profile;