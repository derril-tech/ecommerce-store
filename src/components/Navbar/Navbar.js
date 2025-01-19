import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const categories = [
  "Electronics",
  "Accessories",
  "Fashion",
  "Home Appliances",
  "Toys",
];

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      setFilteredCategories(
        categories.filter((category) =>
          category.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredCategories([]);
    }
  };

  const handleCategoryClick = (category) => {
    setSearchQuery(""); // Clear the search bar
    setFilteredCategories([]); // Clear the dropdown
    navigate(`/search?category=${category}`); // Navigate to search results for the category
  };

  return (
    <nav className="bg-green-500 text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">Emneno</a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:underline ${isActive ? "underline font-bold" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `hover:underline ${isActive ? "underline font-bold" : ""}`
              }
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `hover:underline ${isActive ? "underline font-bold" : ""}`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `hover:underline ${isActive ? "underline font-bold" : ""}`
              }
            >
              Search
            </NavLink>
          </li>
        </ul>

        {/* Search Field for Larger Screens */}
        <div className="hidden lg:block relative">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 rounded border border-gray-300 text-black"
          />
          {filteredCategories.length > 0 && (
            <div className="absolute bg-white text-black mt-2 w-full shadow-lg rounded">
              <ul>
                {filteredCategories.map((category, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategoryClick(category)} // Handle click
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-600 mt-2">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block hover:underline ${
                    isActive ? "underline font-bold" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block hover:underline ${
                    isActive ? "underline font-bold" : ""
                  }`
                }
              >
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block hover:underline ${
                    isActive ? "underline font-bold" : ""
                  }`
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block hover:underline ${
                    isActive ? "underline font-bold" : ""
                  }`
                }
              >
                Search
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
