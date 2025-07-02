import { useEffect, useState, useCallback } from "react";
import ItemCard from "../../Components/ItemCard/ItemCard";
import Spinner from "../../Components/Spinner/Spinner";
import { motion } from "framer-motion";
import { FiFilter } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const LostFound = () => {
  const [items, setItems] = useState([]);
  const [prosses, setProsses] = useState(true);
  const [loading, setLoading] = useState(true);


  setTimeout(() => {
    setLoading(false)
  }, 400);

  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("newest");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [totalPages, setTotalPages] = useState(1);

  const fetchItems = useCallback(async () => {
    setProsses(true);
    try {
      const response = await fetch(
        `https://back-to-you-server.vercel.app/items?search=${search}&category=${category}&location=${location}&sort=${sort}&page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await response.json();
      setItems(data.items);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Failed to fetch items:", error);
    } finally {
      setProsses(false);
    }
  }, [search, category, location, sort, currentPage]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  if (loading) return <Spinner />;

  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-12">
      <h2 className="text-xl md:text-2xl lg:text-4xl font-medium mb-6 text-center text-primary">
        All Lost & Found Items
      </h2>

      <p className="text-base text-neutral text-center mb-8">
        Browse all the items reported as lost or found by our community. Use the
        filters to narrow down your search.
      </p>

      {/* Search Field and Filter Button */}
      <div className="flex items-center justify-between mb-6 gap-4">
        <div className="flex items-center w-full gap-2">
          <input
            type="text"
            placeholder="Search by title or location..."
            className="input input-sm md:input-md input-primary rounded-md focus:border-primary focus:border-2 focus:outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="btn btn-sm md:btn-md btn-primary"
            onClick={() => {
              setSearch(searchInput);
              setCurrentPage(1);
            }}
          >
            <FaSearch size={16} />
          </button>
        </div>
        <button
          className="btn btn-primary btn-sm md:btn-md flex items-center"
          onClick={() => document.getElementById("filter_drawer").showModal()}
        >
          <FiFilter /> Filter
        </button>
      </div>

      {/* Filter Drawer */}
      <dialog id="filter_drawer" className="modal">
        <div className="modal-box space-y-4">
          <h3 className="font-bold text-lg">Filter & Sort</h3>

          <div className="space-y-2">
            <label className="label">Category</label>
            <select
              className="select select-bordered w-full"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="">All</option>
              <option value="Pets">Pets</option>
              <option value="Documents">Documents</option>
              <option value="Gadgets">Gadgets</option>
              <option value="Wallet">Wallet</option>
              <option value="Bag">Bag</option>
              <option>Others</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="label">Location</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="space-y-2">
            <label className="label">Sort By</label>
            <select
              className="select select-bordered w-full"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Items Grid */}
      {items.length === 0 ? (
        <p className="text-center text-neutral">No items found.</p>
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {prosses ? (
            <div className="col-span-full">
              <Spinner />
            </div>
          ) : (
            items.map((item) => (
              <div key={item._id}>
                <ItemCard key={item._id} item={item} />
              </div>
            ))
          )}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-wrap gap-2 justify-center mt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 border rounded-md ${
                currentPage === index + 1
                  ? "bg-primary text-white border-primary"
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              } transition`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default LostFound;
