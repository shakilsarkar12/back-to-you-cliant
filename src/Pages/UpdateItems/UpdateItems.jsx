import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../context/AuthContext/Authcontext";
import _ from "lodash";
import toast from "react-hot-toast";

const UpdateItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [originalData, setOriginalData] = useState({});
  const [formData, setFormData] = useState({});
  const [date, setDate] = useState(new Date());

  // fetch existing item data
  useEffect(() => {
    fetch(`http://localhost:3000/item/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setOriginalData(data);
        setFormData({
          type: data.type,
          image: data.image,
          title: data.title,
          category: data.category,
          location: data.location,
          description: data.description,
        });
        setDate(new Date(data.date));
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedItem = {
      ...formData,
      date: date.toISOString().split("T")[0],
      userEmail: user.email,
      userName: user.displayName,
    };

    // check if data actually changed
    const currentDataForCompare = {
      ...originalData,
      type: formData.type,
      image: formData.image,
      title: formData.title,
      category: formData.category,
      location: formData.location,
      date: date.toISOString().split("T")[0],
      description: formData.description,
    };

    if (_.isEqual(currentDataForCompare, originalData)) {
      toast.error("No changes made.");
      return;
    }

    // proceed to update
    fetch(`http://localhost:3000/updateitem/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Item updated successfully!");
          navigate("/myItems");
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Update Item</h2>

      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Type */}
        <div className="form-control">
          <label className="label">Post Type</label>
          <select
            name="type"
            value={formData.type || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
          >
            <option>Lost</option>
            <option>Found</option>
          </select>
        </div>

        {/* Image */}
        <div className="form-control">
          <label className="label">Thumbnail (Image URL)</label>
          <input
            type="text"
            name="image"
            value={formData.image || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
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
            <option value="" disabled>
              Select Category
            </option>
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

        {/* User Name */}
        <div className="form-control">
          <label className="label">Your Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
            readOnly
          />
        </div>

        {/* User Email */}
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
            rows={4}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-primary"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <div className="flex items-center gap-2 col-span-full">
          <button
            onClick={()=>navigate("/myItems")}
            type="button"
            className="flex-1 btn btn-error w-full"
          >
            Cancel
          </button>
          <button type="submit" className="flex-1 btn btn-primary w-full">
            Update Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateItem;
