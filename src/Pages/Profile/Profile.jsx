import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/Authcontext";
import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <motion.div
      animate={{ opacity: [0, 1], y: [20, 0] }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto mt-20 p-6 border border-gray-200 dark:border-accent rounded-xl shadow text-center bg-white dark:bg-accent"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow">
          <img
            src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt={user?.displayName || "User"}
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
          <FiUser /> {user?.displayName || "Unnamed User"}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">{user?.email}</p>
      </div>

      <div className="mt-6 text-left space-y-2">
        <h3 className="text-lg font-semibold text-accent">About</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Welcome {user?.displayName?.split(" ")[0] || "there"}! This is your
          personal profile page where you can manage your account, see your
          activities, and customize your experience.
        </p>
      </div>
    </motion.div>
  );
};

export default Profile;
