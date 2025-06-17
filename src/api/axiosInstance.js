import axios from "axios";
import { signOut } from "firebase/auth";
import { toast } from "react-hot-toast";
import { auth } from "../Firebase/firebase.init";

const axiosSecure = axios.create({
  baseURL: "https://back-to-you-server.vercel.app/",
  withCredentials: true,
});

axiosSecure.interceptors.response.use(
  (response) => response,
  (error) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        signOut(auth).then(() => {
          toast.error("Unauthorized Access — Please login again!");
        });

    }
    return Promise.reject(error);
  }
);

export default axiosSecure;
