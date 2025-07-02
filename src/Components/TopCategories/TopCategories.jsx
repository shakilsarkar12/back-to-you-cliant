import React from "react";
import { FiPhone, FiUser, FiBook, FiBriefcase } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const TopCategories = () => {
  const categories = [
    { id: 1, icon: <FiPhone />, title: "Mobile" },
    { id: 2, icon: <FiUser />, title: "ID Card" },
    { id: 3, icon: <FiBook />, title: "Documents" },
    { id: 4, icon: <FiBriefcase />, title: "Bag" },
  ];
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      className="my-10 md:my-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl lg:text-4xl font-medium mb-4 md:mb-10 text-center text-primary"
      >
        Top Categories
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-neutral mb-12 max-w-2xl mx-auto leading-relaxed"
      >
        Explore the most commonly lost and found item categories people search
        for.
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {categories.map((cat, idx) => (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            key={cat.id}
            className="bg-gray-50 dark:bg-accent p-4 rounded-lg flex flex-col items-center gap-3 transition"
          >
            <div className="text-3xl text-primary">{cat.icon}</div>
            <h4 className="font-medium text-neutral">{cat.title}</h4>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TopCategories;
