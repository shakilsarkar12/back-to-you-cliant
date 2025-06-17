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

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
        />
      </motion.div>

      {currentItems.length === 0 ? (
        <p className="text-center text-gray-500">No items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {currentItems.map((item) => (
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

      {/* Pagination Controls */}
      <div className="flex flex-wrap gap-2 justify-center mt-10">
        {/* Previous Button */}
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition"
        >
          Prev
        </button>

        {/* Page Number Buttons */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 border rounded-md ${
              currentPage === index + 1
                ? "bg-primary text-white border-primary"
                : "border-primary text-primary hover:bg-primary hover:text-white"
            } transition`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LostFound;
