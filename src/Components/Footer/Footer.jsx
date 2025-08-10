import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import ScrollTo from "../ScrollTo/ScrollTo";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-accent border-t border-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-0 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-primary tracking-wider mb-4">
              BackToYou
            </h3>
            <p className="text-neutral text-sm">
              Connecting lost items with their owners through community power
              and technology.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-neutral hover:text-primary text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/lost&found"
                  className="text-neutral hover:text-primary text-sm"
                >
                  Lost & Found Items
                </Link>
              </li>
              <li>
                <Link
                  to="/addItems"
                  className="text-neutral hover:text-primary text-sm"
                >
                  Add Lost & Found Item
                </Link>
              </li>
              <li>
                <Link
                  to="/allrecovered"
                  className="text-neutral hover:text-primary text-sm"
                >
                  All Recovered Items
                </Link>
              </li>
              <li>
                <Link
                  to="/myitems"
                  className="text-neutral hover:text-primary text-sm"
                >
                  Manage My Items
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-sm font-semibold text-neutral tracking-wider uppercase mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a href="" className="text-neutral hover:text-primary">
                <FaFacebookF />
              </a>
              <a href="#" className="text-neutral hover:text-primary">
                <FaTwitter />
              </a>
              <a href="#" className="text-neutral hover:text-primary">
                <FaInstagram />
              </a>
              <a href="#" className="text-neutral hover:text-primary">
                <FaLinkedinIn />
              </a>
            </div>

            <div className="mt-4">
              <p className="text-sm text-neutral">
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
          <p className="text-neutral text-sm">
            &copy; {new Date().getFullYear()} BackToYou. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/" className="text-neutral hover:text-neutral text-sm">
              Privacy Policy
            </Link>
            <Link to="/" className="text-neutral hover:text-neutral text-sm">
              Terms of Service
            </Link>
            <Link to="/" className="text-neutral hover:text-neutral text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
