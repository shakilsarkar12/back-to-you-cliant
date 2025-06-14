import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Lottie from "lottie-react";
import animationData from "../../assets/register-animation.json";
import {updateProfile } from "firebase/auth";
import { AuthContext } from "../../context/AuthContext/Authcontext";
import toast from "react-hot-toast";
import GoogleBtn from "../../Components/GoogleBtn/GoogleBtn";

export default function Register() {
    const {createUser} = useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    return (
      uppercase.test(password) &&
      lowercase.test(password) &&
      password.length >= 6
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, photoURL, password } = formData;

    if (!name || !email || !photoURL || !password) {
      toast.error("Please fill in all fields!");
      return;
    }

    if (!validatePassword(password)) {
      toast.error(
        "Password must have at least 6 characters, one uppercase, and one lowercase letter."
      );
      return;
    }

    // 🔥 Firebase Authentication Register
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const creationTime = user?.metadata?.creationTime;
        const lastSignInTime = user?.metadata?.lastSignInTime;
        const emailVerified = user?.emailVerified;

        // 🔥 Update Profile with Name & Photo
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then((updateResult) => {
            console.log(updateResult);
            const saveUser = {
              name,
              email,
              photoURL,
              creationTime,
              lastSignInTime,
              emailVerified,
            };

            fetch("http://localhost:3000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("User saved to DB:", data);
                toast.success("Registration Successful!");
                navigate("/"); 
              })
              .catch((error) => {
                console.error("Database save failed:", error);
                toast.error("User Save Failed!");
              });
          })
          .catch((err) => {
            console.error(err);
            toast.error("Profile Update Failed!");
          });
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="sm:flex items-center w-full max-w-7xl overflow-hidden">
        <div className="w-1/2 mx-auto">
          <Lottie animationData={animationData} loop={true} />
        </div>

        <div className="w-full sm:w-1/2 sm:p-4 md:p-8">
          <h2 className="text-xl md:text-3xl font-medium mb-6 text-center text-primary space-y-2">
            Create an Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="text-primary" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
              required
            />

            <label className="text-primary" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
              required
            />

            <label className="text-primary" htmlFor="photoURL">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              id="photoURL"
              placeholder="Photo URL"
              value={formData.photoURL}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
              required
            />

            <label className="text-primary" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
              required
            />

            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </form>

          <p className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
          <GoogleBtn/>
        </div>
      </div>
    </div>
  );
}
