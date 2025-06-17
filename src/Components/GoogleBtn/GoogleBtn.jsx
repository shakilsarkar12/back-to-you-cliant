import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/Authcontext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

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
                fetch("http://localhost:3000/users", {
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
        <button onClick={handleGoogleLogin} className="w-full btn bg-white text-accent-content border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Continue with Google
        </button>
      </>
    );
};

export default GoogleBtn;