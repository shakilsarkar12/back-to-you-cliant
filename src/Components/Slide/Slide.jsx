import React from "react";
import { Link } from "react-router";

const Slide = ({ bgImage, header, desc, btnName, link }) => {
  return (
    <div
      className="h-[25vh] sm:h-[45vh] md:h-[h-70vh] bg-cover bg-center flex items-center rounded-md text-shadow text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-black/40 absolute w-full h-full"></div>
      <div className="p-3 sm:p-4 md:p-8 md:ml-6  xl:ml-20 z-10">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-6xl sm:font-medium mb-3">{header}</h1>
        <p className=" text-xs sm:font-medium sm:text-base lg:text-lg">{desc}</p>
        <Link
          to={link}
          className="btn btn-xs md:btn-md btn-primary hover:bg-secondary px-4 mdpx-6 py-3 border-none shadow-none hover:text-accent text-xs md:text-base mt-3 md:mt-6 duration-300"
        >
          {btnName}
        </Link>
      </div>
    </div>
  );
};

export default Slide;
