import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext/Authcontext";
import { motion } from "framer-motion";
import { FiUser, FiEdit } from "react-icons/fi";
import UpdateProfileModal from "./UpdateProfileModal";
import { updateProfileApi } from "../../api/updateProfileApi";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpdate = async (form) => {
    setLoading(true);
    setError("");
    try {
      const updated = await updateProfileApi(form);
      setUser(updated);
    } catch (err) {
      setError(err.message || "Failed to update profile");
    }
    setLoading(false);
  };

  return (
    <motion.div
      animate={{ opacity: [0, 1], y: [20, 0] }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto mt-20 p-8 border border-gray-200 dark:border-accent rounded-2xl shadow-2xl text-center bg-gradient-to-br from-primary/10 to-white dark:from-accent/30 dark:to-gray-900"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-primary shadow-lg">
          <img
            src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt={user?.displayName || "User"}
            className="w-full h-full object-cover"
          />
          <button
            className="absolute bottom-2 right-2 bg-primary text-white rounded-full p-2 shadow-lg hover:bg-accent transition"
            onClick={() => setModalOpen(true)}
            title="Edit Profile"
          >
            <FiEdit size={20} />
          </button>
        </div>

        <h2 className="text-3xl font-extrabold text-primary flex items-center gap-2 drop-shadow">
          <FiUser /> {user?.displayName || "Unnamed User"}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
          {user?.email}
        </p>
      </div>

      <div className="mt-8 text-left space-y-3">
        <h3 className="text-xl font-semibold text-accent">About</h3>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          Welcome {user?.displayName?.split(" ")[0] || "there"}! This is your
          ultra-modern profile page. Manage your account, see your activities, and
          customize your experience with style.
        </p>
      </div>
      {error && (
        <p className="mt-4 text-red-500 text-center">{error}</p>
      )}
      <UpdateProfileModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        user={user}
        onUpdate={handleUpdate}
      />
    </motion.div>
  );
};

export default Profile;
