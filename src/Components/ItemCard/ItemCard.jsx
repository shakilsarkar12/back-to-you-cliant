import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router";

const ItemCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col hover:-translate-y-2 transition duration-300">
      <img
        src={item.image}
        alt={item.title}
        className="h-56 w-full object-cover"
      />
      <div className="p-5 flex flex-col flex-1 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {item.type}
          </span>
        </div>
        <p className="flex items-center gap-1 text-gray-600 text-sm">
          <IoLocationSharp size={20} />
          {item.location}
        </p>
        <p className="flex items-center gap-1 text-gray-600 text-sm">
          <MdOutlineDateRange size={20} />
          {item.date}
        </p>
        <Link to={`/item/${item._id}`} className="mt-auto">
          <button className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-secondary hover:text-accent transition duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
