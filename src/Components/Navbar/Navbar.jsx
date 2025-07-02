import React, { useContext } from "react";
import { NavLink, Link } from "react-router";
import { AuthContext } from "../../context/AuthContext/Authcontext";
import toast from "react-hot-toast";
import {
  FiCheckCircle,
  FiFolder,
  FiHome,
  FiInfo,
  FiPlusCircle,
  FiSearch,
} from "react-icons/fi";
import AnimatedThemeToggle from "../../Theme/AnimatedThemeToggle";

const Navbar = () => {
  const { user, setUser, logoutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logoutUser()
      .then(() => {
        toast.success("Logged out successfully!");
        setUser(null);
        handleCloseDrower();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleCloseDrower = () => {
    document.getElementById("profile-drawer").checked = false;
  };

  // Drawer nav items
  const drawerNavItems = (
    <>
      <NavLink
        onClick={() => handleCloseDrower()}
        to="/"
        className="navlink flex items-center gap-2 text-lg hover:text-primary duration-300 lg:hidden"
      >
        <FiHome /> Home
      </NavLink>
      <NavLink
        onClick={() => handleCloseDrower()}
        to="/lost&found"
        className="navlink flex items-center gap-2 text-lg hover:text-primary duration-300 lg:hidden"
      >
        <FiSearch /> Lost & Found
      </NavLink>
      <NavLink
        onClick={() => handleCloseDrower()}
        to="/addItems"
        className="navlink flex items-center gap-2 text-lg hover:text-primary duration-300"
      >
        <FiPlusCircle /> Add Item
      </NavLink>
      <NavLink
        onClick={() => handleCloseDrower()}
        to="/allrecovered"
        className="navlink flex items-center gap-2 text-lg hover:text-primary duration-300"
      >
        <FiCheckCircle /> Recovered
      </NavLink>
      <NavLink
        onClick={() => handleCloseDrower()}
        to="/myitems"
        className="navlink flex items-center gap-2 text-lg hover:text-primary duration-300"
      >
        <FiFolder /> My Items
      </NavLink>
      <NavLink
        onClick={() => handleCloseDrower()}
        to="/about"
        className="navlink flex items-center gap-2 text-lg hover:text-primary duration-300"
      >
        <FiInfo /> About
      </NavLink>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow px-4 lg:px-6">
      <div className="navbar max-w-7xl mx-auto px-0">
        {/* Logo */}
        <div className="navbar-start">
          <Link
            to="/"
            className="text-2xl font-bold text-primary cursor-pointer"
          >
            BackToYou
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex space-x-6">
          <NavLink
            to="/"
            className="navlink text-lg hover:text-primary duration-300 w-fit"
          >
            Home
          </NavLink>
          <NavLink
            to="/lost&found"
            className="navlink text-lg hover:text-primary duration-300 w-fit"
          >
            Lost & Found
          </NavLink>
          <NavLink
            to="/about"
            className="navlink text-lg hover:text-primary duration-300 w-fit"
          >
            About
          </NavLink>
        </div>

        {/* End */}
        <div className="navbar-end space-x-3">
          {user ? (
            <div>
              {/* Drawer Open Button */}
              <label
                htmlFor="profile-drawer"
                className="btn btn-ghost btn-circle avatar cursor-pointer"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User"
                    referrerPolicy="no-referrer"
                    src={
                      user?.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </label>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm bg-primary text-white hover:bg-primary-focus"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Drawer */}
      <input id="profile-drawer" type="checkbox" className="drawer-toggle " />
      <div className="drawer-side z-[999]">
        <label htmlFor="profile-drawer" className="drawer-overlay"></label>
        <div className="menu p-4 lg:p-6 w-60 lg:w-80 min-h-full bg-base-200 text-base-content space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary">
              <img
                src={
                  user?.photoURL ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
                alt="profile"
                referrerPolicy="no-referrer"
              />
            </div>
            <h2 className="text-lg font-semibold text-primary">
              {user?.displayName || "Guest User"}
            </h2>
            <p className="text-gray-600 text-sm">{user?.email || "N/A"}</p>
          </div>
          <AnimatedThemeToggle />

          <Link
            to="/profile"
            onClick={() => handleCloseDrower()}
            className="btn btn-primary btn-outline"
          >
            View Profile
          </Link>

          <div className="divider"></div>

          {/* Drawer nav links */}
          <div className="flex flex-col space-y-2">{drawerNavItems}</div>

          <div className="mt-auto">
            <button
              id="profile-drawer"
              onClick={handleLogOut}
              className="btn btn-sm w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
