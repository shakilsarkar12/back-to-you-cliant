import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const SiteStatistics = () => {
  const [stats, setStats] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    fetch("http://localhost:3000/siteStats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  if (!stats) {
    return (
      <div className="flex justify-center items-center my-20">
        <span className="loading loading-bars loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <motion.div
      animate={{ y: [50, 0], opacity: [0, 100] }}
      transition={{ duration: 0.8 }}
      ref={ref}
      className="max-w-7xl mx-auto my-20 p-4 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl lg:text-4xl font-medium mb-4 md:mb-10 text-center text-primary"
      >
        Community Statistics
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-500 mb-10 max-w-xl mx-auto"
      >
        See how active and successful our Lost & Found platform has been.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm: md:grid-cols-3 gap-8"
      >
        <motion.div
          variants={cardVariants}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white p-8 border border-secondary rounded-2xl shadow hover:shadow-lg transition-all"
        >
          <div className="text-5xl font-bold text-primary mb-2">
            {inView && (
              <CountUp start={0} end={stats.lostCount} duration={2} />
            )}
          </div>
          <p className="text-lg font-medium text-accent">Lost Items</p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white p-8 border border-secondary rounded-2xl shadow hover:shadow-lg transition-all"
        >
          <div className="text-5xl font-bold text-primary mb-2">
            {inView && (
              <CountUp start={0} end={stats.foundCount} duration={2} />
            )}
          </div>
          <p className="text-lg font-medium text-accent">Found Items</p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white p-8 border border-secondary rounded-2xl shadow hover:shadow-lg transition-all"
        >
          <div className="text-5xl font-bold text-primary mb-2">
            {inView && (
              <CountUp start={0} end={stats.recoveredCount} duration={2} />
            )}
          </div>
          <p className="text-lg font-medium text-accent">Recovered Items</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SiteStatistics;
