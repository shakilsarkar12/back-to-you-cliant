import React, { useContext } from "react";
import { Links, NavLink } from "react-router";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext/Authcontext";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
  const { user, setUser, logoutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logoutUser()
      .then(() => {
        toast.success("Log Out Success");
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

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
        to="/addItems"
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
      <div className="navbar max-w-7xl mx-auto px-4 xl:px-0">
        <div className="navbar-start">
          {!user && (
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="cursor-pointer pr-3 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
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
          )}
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
          {user ? (
            <>
              <button onClick={handleLogOut} className="btn btn-primary btn-sm">
                Log Out
              </button>
              <div className="dropdown dropdown-end">
                <div className="relative group">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="User profile"
                        referrerPolicy="no-referrer"
                        src={
                          user?.photoURL ||
                          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        }
                      />
                    </div>
                  </div>

                  <div className="w-[124px] text-center absolute top-10 right-0  bg-gray-700 text-white text-xs rounded py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {user?.displayName || "Guest User"}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-56 text-center shadow"
                >
                  {Navlinks}
                </ul>
              </div>
            </>
          ) : (
            <Link
              className="btn btn-primary btn-sm
          "
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
