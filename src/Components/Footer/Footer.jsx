import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-primary tracking-wider mb-4">
              BackToYou
            </h3>
            <p className="text-gray-600 text-sm">
              Connecting lost items with their owners through community power
              and technology.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/home"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/lost&found"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  Lost & Found Items
                </Link>
              </li>
              <li>
                <Link
                  to="/addItems"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  Add Lost & Found Item
                </Link>
              </li>
              <li>
                <Link
                  to="/allrecovered"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  All Recovered Items
                </Link>
              </li>
              <li>
                <Link
                  to="/myitems"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  Manage My Items
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <FaLinkedinIn />
              </a>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Subscribe to our newsletter
              </p>
              <div className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 border border-gray-300 rounded-l-md text-sm w-full focus:outline-primary"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-r-md text-sm hover:bg-primary">
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} BackToYou. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/" className="text-gray-500 hover:text-gray-600 text-sm">
              Privacy Policy
            </Link>
            <Link to="/" className="text-gray-500 hover:text-gray-600 text-sm">
              Terms of Service
            </Link>
            <Link to="/" className="text-gray-500 hover:text-gray-600 text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
