import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthContext/Authcontext";
import Spinner from "../../Components/Spinner/Spinner";
import { motion } from "framer-motion";

const AddLostFound = () => {
  const { user } = useContext(AuthContext);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

setTimeout(() => {
  setLoading(false)
}, 300);



  const [formData, setFormData] = useState({
    type: "Lost",
    image: "",
    title: "",
    description: "",
    category: "",
    location: "",
  });

  if (loading) {
    return <Spinner />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemData = {
      ...formData,
      date: date.toISOString().split("T")[0],
      userName: user?.displayName || "",
      userEmail: user?.email || "",
    };

    fetch("https://back-to-you-server.vercel.app/addItems", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemData),
    })
      .then((res) => res.json())
        .then((data) => {
        if (data.insertedId) {
          toast.success("Item added successfully!");
          setFormData({
            type: "Lost",
            image: "",
            title: "",
            description: "",
            category: "",
            location: "",
          });
          setDate(new Date());
        } else {
          toast.error("Failed to add item.");
        }
      });
  };

  return (
    <motion.div
    animate={{ y: [50, 0], opacity: [0, 100] }}
    transition={{ duration: 0.4 }} className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Add Lost / Found Item
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Type */}
        <div className="form-control">
          <label className="label">Post Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
          >
            <option>Lost</option>
            <option>Found</option>
          </select>
        </div>

        {/* Thumbnail */}
        <div className="form-control">
          <label className="label">Thumbnail (Image URL)</label>
          <input
            type="text"
            name="image"
            value={formData.image || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
            placeholder="https://image.url"
            required
          />
        </div>

        {/* Title */}
        <div className="form-control">
          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
            required
          />
        </div>

        {/* Category */}
        <div className="form-control">
          <label className="label">Category</label>
          <select
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
            required
          >
            <option value="" disabled>Select Category</option>
            <option>Pets</option>
            <option>Documents</option>
            <option>Gadgets</option>
            <option>Wallet</option>
            <option>Bag</option>
            <option>Others</option>
          </select>
        </div>

        {/* Location */}
        <div className="form-control">
          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
            required
          />
        </div>

        {/* Date */}
        <div className="form-control">
          <label className="label">Date Lost / Found</label>
          <DatePicker
            selected={date}
            onChange={(newDate) => setDate(newDate)}
            dateFormat="yyyy-MM-dd"
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
          />
        </div>

        {/* Contact Name */}
        <div className="form-control">
          <label className="label">Your Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
            readOnly
          />
        </div>

        {/* Contact Email */}
        <div className="form-control">
          <label className="label">Your Email</label>
          <input
            type="email"
            value={user?.email || ""}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
            readOnly
          />
        </div>

        {/* Description */}
        <div className="form-control col-span-full">
          <label className="label block">Description</label>
          <textarea
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="col-span-full">
          <button type="submit" className="btn btn-primary w-full">
            Add Post
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddLostFound;
