import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import ItemCard from "../ItemCard/ItemCard";

const LatestFindLostItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/latestItems")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className="my-20">
      <h2 className="text-xl md:text-2xl lg:text-4xl font-medium mb-10 text-center text-primary">
        Latest Find & Lost Items
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/lost&found"
          className="inline-block bg-primary text-white hover:text-accent border border-primary px-6 py-3 rounded-lg hover:bg-transparent duration-300 transition"
        >
          See All Items
        </Link>
      </div>
    </div>
  );
};

export default LatestFindLostItems;
