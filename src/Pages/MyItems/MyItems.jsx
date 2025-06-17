import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext/Authcontext";
import { Link } from "react-router";
import toast from "react-hot-toast";
import alerterror from '../../assets/alert-error.png'
import Swal from "sweetalert2";
import Spinner from "../../Components/Spinner/Spinner";
import { motion } from "framer-motion";
import axiosSecure from "../../api/axiosInstance";

const MyItems = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://back-to-you-server.vercel.app/my-items?email=${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, [user?.email, setLoading]);

  if (loading) {
    return <Spinner/>;
  }
  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/item/${id}?email=${user?.email}`)
          .then((res) => {
            if (res.data.deletedCount) {
              setItems(items.filter((item) => item._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            } else {
              toast.error("Failed to delete item.");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
    }

  if (items.length === 0) {
    return (
      <motion.div
      animate={{ y: [50, 0], opacity: [0, 100] }}
      transition={{ duration: 0.4 }} className="max-w-6xl mx-auto mt-8 md:mt-12">
        <h2 className="text-3xl font-bold mb-8 text-center">My Posts</h2>

        <div className="flex flex-col items-center justify-center text-center text-gray-500 text-xl">
          <img src={alerterror} alt="" />
           No items found!
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      animate={{ y: [50, 0], opacity: [0, 100] }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto mt-8 md:mt-12"
    >
      <h2 className="text-xl md:text-2xl lg:text-4xl font-medium mb-8 text-center text-primary">
        My Posts
      </h2>
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
                  <Link to={`/updateitems/${item._id}`}>
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
    </motion.div>
  );
};

export default MyItems;
