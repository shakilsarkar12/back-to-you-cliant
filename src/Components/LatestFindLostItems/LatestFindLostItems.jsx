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
    fetch("https://back-to-you-server.vercel.app/latestItems")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div
      className="my-10 md:my-20"
    >
      <motion.h2
        className="text-xl md:text-2xl lg:text-4xl font-medium mb-6 md:mb-10 text-center text-primary"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Latest Find & Lost Items
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
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
        {items.map((item) => (
          <motion.div
            key={item._id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
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
