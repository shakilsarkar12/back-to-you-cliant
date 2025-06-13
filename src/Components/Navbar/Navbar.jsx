import React from "react";
import { NavLink } from "react-router";
import { Link } from "react-router";

const Navbar = () => {
  const Navlinks = (
    <>
      <NavLink
        className="navlink text-lg hover:text-primary duration-300 md:hidden w-fit"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="navlink text-lg hover:text-primary duration-300 md:hidden w-fit"
        to="/lost&found"
      >
        Lost & Found Items
      </NavLink>
      <NavLink
        className="navlink text-lg hover:text-primary duration-300 w-fit"
        to="/addlost&found"
      >
        Add Lost & Found Item
      </NavLink>
      <NavLink
        className="navlink text-lg hover:text-primary duration-300 w-fit"
        to="/allrecovered"
      >
        All Recovered Items
      </NavLink>
      <NavLink
        className="navlink text-lg hover:text-primary duration-300 w-fit"
        to="/myitems"
      >
        Manage My Items
      </NavLink>
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <Link to="/" className="text-xl text-primary">
            BackToYou
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <NavLink
              className="navlink text-lg hover:text-primary duration-300"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="navlink text-lg hover:text-primary duration-300"
              to="/lost&found"
            >
              Lost & Found Items
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-4">
            <button className="btn btn-primary btn-sm">Log Out</button>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-56 text-center shadow"
            >
              {Navlinks}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
