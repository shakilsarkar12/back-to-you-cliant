import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext/Authcontext";
import Spinner from "../../Components/Spinner/Spinner";
import { motion } from "framer-motion";
import { ImMenu } from "react-icons/im";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AllRecoveredItems = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [recoveredItems, setRecoveredItems] = useState([]);
  const [isTableLayout, setIsTableLayout] = useState(false);

  useEffect(() => {
    fetch("https://back-to-you-server.vercel.app/allrecoveredItems", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setRecoveredItems(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <Spinner />;
  }

console.log(recoveredItems);

  return (
    <motion.div
      animate={{ y: [50, 0], opacity: [0, 100] }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto mt-10"
    >
      <h2 className="text-3xl font-semibold mb-6 text-center text-primary">
        My Recovered Items
      </h2>

      {/* Layout Toggle Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setIsTableLayout(!isTableLayout)}
          className="flex items-center gap-2 px-5 py-2 bg-primary text-white hover:text-accent font-medium rounded hover:bg-secondary transition"
        >
          {isTableLayout ? (
            <>
              <TfiLayoutGrid3Alt /> Card Layout
            </>
          ) : (
            <>
              <ImMenu /> Table Layout
            </>
          )}
        </button>
      </div>

      {/* No Data */}
      {recoveredItems.length === 0 ? (
        <div className="text-center text-neutral mt-10">
          No recovered items found.
        </div>
      ) : (
        <>
          {/* Table Layout */}
          {isTableLayout ? (
            <div className="overflow-x-auto rounded-md">
              <table className="bg-accent table table-zebra min-w-4xl">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recoveredItems.map((item, index) => (
                    <tr key={item?._id}>
                      <th>{index + 1}</th>
                      <td>
                        <img
                          src={item?.image}
                          alt={item?.title}
                          className="w-12 h-12 rounded"
                        />
                      </td>
                      <td>{item?.title}</td>
                      <td>{item?.type}</td>
                      <td>{item?.category}</td>
                      <td>{item?.location}</td>
                      <td>{item?.date}</td>
                      <td>{item?.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            // Card Layout
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recoveredItems.map((item) => (
                <motion.div
                  key={item?._id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-50 dark:bg-accent border border-secondary rounded-xl p-5 shadow hover:shadow-lg transition-all"
                >
                  <div className="mb-3">
                    <img
                      src={item?.image}
                      alt={item?.title}
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-neutral">
                    {item?.title}
                  </h3>
                  <p className="text-neutralmb-1">
                    <span className="font-medium">Type:</span>{" "}
                    {item?.type}
                  </p>
                  <p className="text-neutralmb-1">
                    <span className="font-medium">Category:</span>{" "}
                    {item?.category}
                  </p>
                  <p className="text-neutralmb-1">
                    <span className="font-medium">Location:</span>{" "}
                    {item?.location}
                  </p>
                  <p className="text-neutralmb-1">
                    <span className="font-medium">Date:</span>{" "}
                    {item?.date}
                  </p>
                  <p className="text-neutral">
                    <span className="font-medium">Status:</span>{" "}
                    {item?.status}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}
    </motion.div>
  );
};

export default AllRecoveredItems;
