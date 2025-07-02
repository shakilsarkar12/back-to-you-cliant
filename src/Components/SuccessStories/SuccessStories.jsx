import React from 'react';
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const SuccessStories = () => {
    const stories = [
      { id: 1, name: "Mitu", story: "Found my lost wallet through this site!" },
      { id: 2, name: "Imran", story: "Got back my student ID, thank you!" },
    ];
    return (
      <div className="my-10 md:my-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl lg:text-4xl font-medium mb-4 md:mb-10 text-center text-primary"
        >
          Success Stories
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-neutral mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Real stories of people who reunited with their lost belongings through
          BackToYou.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4">
          {stories.map((item, idx) => (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={item.id}
              className="bg-gray-50 dark:bg-accent p-4 rounded-lg flex flex-col items-center gap-3 transition"
            >
              <p className="text-neutral mb-4">“{item.story}”</p>
              <h4 className="text-primary font-semibold">— {item.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    );
};

export default SuccessStories;