import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/Authcontext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";

const GoogleBtn = ({state}) => {
    const { googleLogin } = useContext(AuthContext);
      const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result?.user
                const saveUser = {
                  displayName: user?.displayName,
                  email: user?.email,
                  photoURL: user?.photoURL,
                  creationTime: user?.metadata?.creationTime,
                  lastSignInTime: user?.metadata?.lastSignInTime,
                  emailVerified: user?.emailVerified,
                };
                fetch("https://back-to-you-server.vercel.app/users", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(saveUser),
                })
                  .then((res) => res.json())
                  .then(() => {
                    navigate(state? state : "/");
                    toast.success("Login Successful!");
                  })
                  .catch(() => {
                    toast.error("User Save Failed!");
                  });
        })
    }

    return (
      <>
        <div className="divider">or</div>
        <button
          onClick={handleGoogleLogin}
          className="w-full btn bg-gray-50 dark:bg-accent text-neutral-content border-[#e5e5e5]"
        >
          <FcGoogle />
          Continue with Google
        </button>
      </>
    );
};

export default GoogleBtn;