import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const UserReviews = () => {
  const reviews = [
    { id: 1, name: "Shamim", feedback: "Found my phone within 2 days!" },
    { id: 2, name: "Anika", feedback: "Great platform to help people!" },
    { id: 3, name: "Rafiq", feedback: "Very helpful and easy to use." },
  ];
  return (
    <motion.div
      className="my-10 md:my-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl lg:text-4xl font-medium mb-4 md:mb-10 text-center text-primary"
      >
        What People Say
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-neutral mb-12 max-w-2xl mx-auto leading-relaxed"
      >
        Hear what our users are saying about their experience with BackToYou.
      </motion.p>
      <div className="grid md:grid-cols-3 gap-4">
        {reviews.map((review, idx) => (
          <motion.div
            key={review.id}
            className="bg-gray-50 dark:bg-accent p-6 rounded-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <p className="text-neutral mb-4">{review.feedback}</p>
            <h4 className="text-primary font-semibold">— {review.name}</h4>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UserReviews;
