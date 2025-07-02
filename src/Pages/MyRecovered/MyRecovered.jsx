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

const MyRecoveredItems = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [recoveredItems, setRecoveredItems] = useState([]);
  const [isTableLayout, setIsTableLayout] = useState(false);

  useEffect(() => {
    fetch(
      `https://back-to-you-server.vercel.app/recoveredItems?email=${user?.email}`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setRecoveredItems(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <motion.div
      animate={{ y: [50, 0], opacity: [0, 100] }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto mt-10 p-4"
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
            <div className="bg-accent overflow-x-auto  rounded-md">
              <table className="table table-zebra min-w-3xl">
                <thead>
                  <tr>
                    <th className="w-1/24">#</th>
                    <th className="w-3/12">Recovered By</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th className="w-3/12">Title</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {recoveredItems.map((item, index) => (
                    <tr key={item?.recovery?._id}>
                      <th>{index + 1}</th>
                      <td className="flex items-center gap-2">
                        <img
                          src={item?.recovery?.recoveredBy?.image}
                          alt="user"
                          className="w-8 h-8 rounded-full"
                        />
                        <span>{item?.recovery?.recoveredBy?.name}</span>
                      </td>
                      <td>{item?.recovery?.recoveryLocation}</td>
                      <td>{item?.recovery?.recoveryDate}</td>
                      <td>{item?.item?.title}</td>
                      <td>{item?.item?.type}</td>
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
                  key={item?.recovery?._id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-50 dark:bg-accent border border-secondary rounded-xl p-5 shadow hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={item?.recovery?.recoveredBy?.image}
                      alt="user"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-neutral">
                        {item.recovery?.recoveredBy?.name}
                      </h4>
                      <p className="text-sm text-neutral">
                        {item?.recovery?.recoveryDate}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-neutral">
                    {item?.item?.title}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium text-neutral">Type:</span>{" "}
                    {item?.item?.type}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium text-neutral">Location:</span>{" "}
                    {item?.recovery?.recoveryLocation}
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

export default MyRecoveredItems;
