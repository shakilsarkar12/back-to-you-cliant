import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext/Authcontext";

const AllRecoveredItems = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [recoveredItems, setRecoveredItems] = useState([]);

  useEffect(() => {
    fetch(`https://back-to-you-server.vercel.app/recoveredItems?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRecoveredItems(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-bars loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        My Recovered Items
      </h2>

      {recoveredItems.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          No recovered items found.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Recovered By</th>
                <th>Recovery Location</th>
                <th>Recovery Date</th>
                <th>Item Title</th>
                <th>Item Type</th>
              </tr>
            </thead>
            <tbody>
              {recoveredItems.map((item) => (
                <tr key={item.recovery._id}>
                  <td className="flex items-center gap-2">
                    <img
                      src={item.recovery.recoveredBy.image}
                      alt="user"
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{item.recovery.recoveredBy.name}</span>
                  </td>
                  <td>{item.recovery.recoveryLocation}</td>
                  <td>{item.recovery.recoveryDate}</td>
                  <td>{item.item.title}</td>
                  <td>{item.item.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllRecoveredItems;
