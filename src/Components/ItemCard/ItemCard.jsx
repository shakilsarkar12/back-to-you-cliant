import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router";

const ItemCard = ({ item }) => {
  return (
    <div className="bg-gray-50 dark:bg-accent rounded-xl overflow-hidden shadow-[0px_0px_3px_#988] flex flex-col hover:-translate-y-0.5 transition duration-300 h-full relative">
      <img
        src={item?.image}
        alt={item?.title}
        className="h-56 w-full object-cover"
      />
      <div className="p-4 flex flex-col flex-1 space-y-3">
        <span className="bg-primary text-white text-sm font-medium pl-5 pr-2.5 py-0.5 rounded-l-full absolute top-4 right-0">
          {item.type}
        </span>
        <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
        <p className="flex items-center gap-1 text-neutral text-sm">
          <IoLocationSharp size={20} />
          {item.location}
        </p>
        <p className="flex items-center gap-1 text-neutral text-sm">
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
