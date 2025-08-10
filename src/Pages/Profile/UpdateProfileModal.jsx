import React, { useState } from "react";
import { motion } from "framer-motion";

const UpdateProfileModal = ({ isOpen, onClose, user, onUpdate }) => {
  const [form, setForm] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    photoURL: user?.photoURL || ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onUpdate(form);
    setLoading(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4 text-primary">Update Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="displayName"
            value={form.displayName}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="photoURL"
            value={form.photoURL}
            onChange={handleChange}
            placeholder="Photo URL"
            className="w-full p-2 border rounded"
          />
          <div className="flex gap-2 justify-end">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded bg-primary text-white" disabled={loading}>
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default UpdateProfileModal;
