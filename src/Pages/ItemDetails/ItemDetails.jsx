import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext/Authcontext";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaEnvelope,
  FaTags,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TbStatusChange } from "react-icons/tb";
import Spinner from "../../Components/Spinner/Spinner";
import { motion } from "framer-motion";

const ItemDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState({});
  const [recoveryDate, setRecoveryDate] = useState(new Date());
  const [recoveryLocation, setRecoveryLocation] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://back-to-you-server.vercel.app/item/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data)
        setLoading(false)
      });
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  const handleRecover = async (e) => {
    e.preventDefault();
    if (item.status === "recovered") {
      return toast.error("Item already recovered!");
    }

    const recoveryInfo = {
      itemId: id,
      recoveredBy: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
      recoveryLocation,
      recoveryDate: recoveryDate.toISOString().split("T")[0],
    };

    const res = await fetch(`https://back-to-you-server.vercel.app/recoveries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recoveryInfo),
    });

    if (res.ok) {
      await fetch(`https://back-to-you-server.vercel.app/item/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "recovered" }),
      });
      toast.success("Item marked as recovered!");
      document.getElementById("recover_modal").close();
      fetch(`https://back-to-you-server.vercel.app/item/${id}`)
        .then((res) => res.json())
        .then((data) => setItem(data));
    } else {
      toast.error("Failed to update!");
    }
  };

  return (
    <motion.div
    animate={{ y: [50, 0], opacity: [0, 100] }}
    transition={{ duration: 0.4 }} className="max-w-6xl mx-auto mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image */}
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="rounded-xl w-full object-cover"
          />
          <span className="text-xs sm:text-sm md:text-base text-white px-3 py-1.5 bg-primary rounded-tr-xl rounded-bl-xl absolute top-0 right-0">
            {item.type}
          </span>
        </div>

        {/* Info */}
        <div>
          <h2 className="text-xl md:text-3xl font-medium text-accent mb-3">
            {item.title}
          </h2>

          <p className="text-base md:text-lg flex items-center gap-2 mb-1">
            <FaTags /> <span>Category :</span>
            {item.category}
          </p>

          <p className="text-base md:text-lg flex items-center gap-2 mb-1">
            <FaMapMarkerAlt /> <span>Location:</span>
            {item.location}
          </p>

          <p className="text-base md:text-lg flex items-center gap-2 mb-1">
            <FaCalendarAlt /> <span>Date:</span>
            {item.date}
          </p>

          <p
            className={`text-base md:text-lg flex items-center gap-2 mb-4 ${
              item.status === "recovered" ? "text-green-600" : "text-orange-500"
            }`}
          >
            <TbStatusChange /> Status: {item.status}
          </p>
          <p className="text-accent mb-2">{item.description}</p>
          <div>
            <p className="text-primary mb-2">Added by:</p>
            <p className="text-accent mb-2 flex items-center gap-1">
              <FaUser />
              {item.userName}
            </p>
            <p className="text-accent mb-2 flex items-center gap-1">
              <IoMdMail />
              {item.userEmail}
            </p>
          </div>
          <button
            className="btn btn-primary mt-3 disabled:bg-gray-400"
            onClick={() => document.getElementById("recover_modal").showModal()}
            disabled={item.status === "recovered"}
          >
            {item.type === "Lost" ? "Found This!" : "This is Mine!"}
          </button>
        </div>
      </div>

      {/* Modal */}
      <dialog id="recover_modal" className="modal">
        <form onSubmit={handleRecover} className="modal-box space-y-4">
          <h3 className="font-bold text-xl mb-4">Confirm Recovery</h3>

          <input
            type="text"
            placeholder="Recovery Location"
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
            value={recoveryLocation}
            required
            onChange={(e) => setRecoveryLocation(e.target.value)}
          />

          <DatePicker
            required
            selected={recoveryDate}
            onChange={(date) => setRecoveryDate(date)}
            dateFormat="yyyy-MM-dd"
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
          />

          <div className="flex items-center gap-2  mb-4">
            <div className="w-fit h-fit">
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2">
                <FaUser className="text-primary" /> {user?.displayName}
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-primary" /> {user?.email}
              </p>
            </div>
          </div>

          <div className="modal-action">
            <div method="dialog">
              <button onClick={()=>document.getElementById("recover_modal").close()} type="button" className="btn">Close</button>
            </div>
            <button type="submit" className="btn btn-primary">Confirm</button>
          </div>
        </form>
      </dialog>
    </motion.div>
  );
};

export default ItemDetails;
