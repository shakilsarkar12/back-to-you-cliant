import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import ItemCard from "../ItemCard/ItemCard";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const LatestFindLostItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/latestItems")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className="my-10 md:my-20">
      <motion.h2
        className="text-xl md:text-2xl lg:text-4xl font-medium mb-6 md:mb-10 text-center text-primary"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Latest Find & Lost Items
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-neutral mb-12 max-w-2xl mx-auto leading-relaxed"
      >
        Check out the most recent lost and found items posted by our community.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {items.map((item, idx) => (
          <motion.div
            key={item._id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <ItemCard item={item} />
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-8">
        <Link
          to="/lost&found"
          className="inline-block bg-primary text-white hover:text-accent border border-primary px-6 py-3 rounded-lg hover:bg-transparent duration-300 transition"
        >
          See All Items
        </Link>
      </div>
    </div>
  );
};

export default LatestFindLostItems;
