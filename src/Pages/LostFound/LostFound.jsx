import { useEffect, useState } from "react";
import { Link } from "react-router";
import ItemCard from "../../Components/ItemCard/ItemCard";
import Spinner from "../../Components/Spinner/Spinner";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const LostFound = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://back-to-you-server.vercel.app/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  // Filtered Items
  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.location.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-12">
      <motion.h2
        animate={{ y: [50, 0], opacity: [0, 100] }}
        transition={{ duration: 0.4 }}
        className="text-xl md:text-2xl lg:text-4xl font-medium mb-8 text-center text-primary"
      >
        All Lost & Found Items
      </motion.h2>

      {/* Search Field */}
      <motion.div
        animate={{ y: [50, 0], opacity: [0, 100] }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="max-w-md mx-auto mb-10"
      >
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by title or location..."
          className="w-full  px-3 py-2 border border-primary rounded-md focus:outline-primary"
        />
      </motion.div>

      {filteredItems.length === 0 ? (
        <p className="text-center text-gray-500">No items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item._id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ItemCard key={item._id} item={item} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LostFound;
