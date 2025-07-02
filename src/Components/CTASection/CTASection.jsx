import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <div className="bg-gray-50 dark:bg-accent text-center py-12 px-2 rounded-lg my-10 md:my-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl lg:text-4xl font-medium mb-4 md:mb-10 text-center text-primary"
      >
        Lost or Found something?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-sm md:text-base mb-6"
      >
        Add your item now and help others find their belongings!y guidelines.
      </motion.p>

      <Link
        to="/addItems"
        className="btn btn-sm md:btn-md btn-primary hover:bg-primary-focus"
      >
        Add Lost/Found Item
      </Link>
    </div>
  );
};

export default CTASection;
