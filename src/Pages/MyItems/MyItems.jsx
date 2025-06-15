import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext/Authcontext";
import { Link } from "react-router";
import toast from "react-hot-toast";

const MyItems = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-items?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user?.email]);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      const res = await fetch(`http://localhost:3000/item/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Item deleted successfully");
        // Remove item from UI
        setItems(items.filter((item) => item._id !== id));
      } else {
        toast.error("Failed to delete item.");
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">My Posts</h2>

      {items.length === 0 ? (
        <div className="text-center text-gray-500 text-xl">
          ⚠️ No items found!
        </div>
      ) : (
        <div className="overflow-x-auto shadow-[0px_0px_5px_rgb(0_0_0_/_0.25)] rounded-md">
          <table className="table shadow-[0px_0px_10px_#f3f3f3] table-zebra min-w-3xl">
            <thead>
              <tr>
                <th className="w-1/24">#</th>
                <th className="w-4/12">Title</th>
                <th>Type</th>
                <th className="w-3/12">Status</th>
                <th className="w-3/12">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.type}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded ${
                        item.status === "recovered"
                          ? "bg-green-200 text-green-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {item.status ? item.status : "not-recovered"}
                    </span>
                  </td>
                  <td className="flex justify-between gap-2">
                    <Link to={`/update-item/${item._id}`}>
                      <button className="btn btn-sm btn-primary">Update</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                    <Link to={`/item/${item._id}`} className="">
                      <button className="btn btn-primary btn-sm text-white font-medium hover:bg-secondary hover:text-accent transition duration-300">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyItems;
