import React from 'react';
import { Link } from 'react-router';

const ItemCard = ({item}) => {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col">
        <img
          src={item.image}
          alt={item.title}
          className="h-56 w-full object-cover"
        />
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-xl font-medium mb-2">{item.title}</h3>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Type:</span> {item.type}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-medium">Date:</span> {item.date}
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