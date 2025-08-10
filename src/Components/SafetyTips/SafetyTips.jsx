import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const SafetyTips = () => {
  const tips = [
    "Always keep your belongings close in public places.",
    "Immediately report found items to authorities.",
    "Never share sensitive info with strangers.",
    "Use strong passwords for digital accounts.",
    "Keep a copy of important documents safely.",
    "Be aware of your surroundings and avoid risky areas at night.", // New tip added
  ];

  return (
    <div id="tips" className="my-12 md:my-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-10 text-center text-primary drop-shadow-lg"
      >
        Safety Tips
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-neutral mb-12 max-w-2xl mx-auto leading-relaxed text-center"
      >
        Stay safe and protect your belongings with these essential safety
        guidelines.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {tips.map((tip, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-50 dark:bg-accent rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <FiCheckCircle className="text-primary mb-3" size={32} />
            <span className="text-lg font-medium text-gray-700 dark:text-gray-200 leading-relaxed">
              {tip}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SafetyTips;
