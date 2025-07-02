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
  ];

  return (
    <div id="tips" className="my-12 md:my-20 max-w-5xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl lg:text-4xl font-medium mb-4 md:mb-10 text-center text-primary"
      >
        Safety Tips
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-neutral mb-12 max-w-2xl mx-auto leading-relaxed"
      >
        Stay safe and protect your belongings with these essential safety
        guidelines.
      </motion.p>

      <motion.ul
        className="space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {tips.map((tip, idx) => (
          <motion.li
            key={idx}
            className="flex items-start gap-3 text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <FiCheckCircle className="text-primary mt-1" size={20} />
            {tip}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default SafetyTips;
