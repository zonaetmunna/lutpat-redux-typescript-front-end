import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800">
              Ecommerce
            </a>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <a
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-600 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-600 hover:bg-gray-100"
            >
              Shop
            </a>
            <a
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-600 hover:bg-gray-100"
            >
              Cart
            </a>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden bg-white px-2 pt-2 pb-3`}
        id="mobile-menu"
      >
        <a
          href="/"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-600 hover:bg-gray-100"
        >
          Home
        </a>
        <a href="/" className="block px-3 py-2 rounded-md text-base font">
          about
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
