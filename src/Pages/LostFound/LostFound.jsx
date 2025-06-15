import { useEffect, useState } from "react";
import { Link } from "react-router";
import ItemCard from "../../Components/ItemCard/ItemCard";

const LostFound = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-8 md:mt-12">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-medium mb-10 text-center text-primary">
              All Lost & Found Items
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {items.map((item) => <ItemCard key={item._id} item={item}/>)}
      </div>
    </div>
  );
};

export default LostFound;
