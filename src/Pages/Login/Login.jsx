import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/login-animation.json";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext/Authcontext";
import GoogleBtn from "../../Components/GoogleBtn/GoogleBtn";
import Spinner from "../../Components/Spinner/Spinner";
import { motion } from "framer-motion";

const Login = () => {
  const { loginUser, loading, setLoading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return;
    }

    loginUser(email, password)
      .then(() => {
        toast.success("Login Successful!");
        navigate(location.state ? location.state : "/");
        setLoading(false)
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <motion.div
    animate={{ y: [50, 0], opacity: [0, 100] }}
    transition={{ duration: 0.4 }} className="flex items-start justify-center ">
      <div className="sm:flex items-center w-full max-w-7xl overflow-hidden">
        <div className="w-1/2 mx-auto">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>

        <div className="w-full sm:w-1/2 sm:p-4 md:p-8">
          <h2 className="text-xl sm:text-3xl font-medium mb-6 text-center text-primary space-y-2">
            Wellcome Back! <br /> Login Here
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <label className="text-primary" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="text-primary" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary w-full text-white">
              Login
            </button>
          </form>

          <p className="text-center mt-4 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
          <GoogleBtn state={location.state } />
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
