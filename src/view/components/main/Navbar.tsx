import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              to="/"
              className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="contact"
              className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              to="cart"
              className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              cart
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-900 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/login"
              className="text-gray-900 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-gray-900 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>

            <Link
              to="about"
              className="text-gray-900 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="contact"
              className="text-gray-900 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-900 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/login"
              className="text-gray-900 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
