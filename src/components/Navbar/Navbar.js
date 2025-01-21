import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  { name: "Electronics", image: "/images/electronicscat.png" },
  { name: "Accessories", image: "/images/accessoriescat.png" },
  { name: "Fashion", image: "/images/fashioncat.png" },
  { name: "Home Appliances", image: "/images/home-appliancescat.png" },
  { name: "Toys", image: "/images/toys.jpg" },
];

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const navigate = useNavigate();

  // Get cart item count from Redux
  const cartItemsCount = useSelector(
    (state) =>
      state.cart?.items.reduce((count, item) => count + item.quantity, 0) || 0
  );

  // Get wishlist item count from Redux
  const wishlistItemsCount = useSelector(
    (state) => state.wishlist?.items.length || 0
  );

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      setFilteredCategories(
        categories.filter((category) =>
          category.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredCategories([]);
    }
  };

  const handleCategoryClick = (categoryName) => {
    setSearchQuery("");
    setFilteredCategories([]);
    navigate(`/search?category=${categoryName}`);
  };

  return (
    <nav className="bg-green-500 text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/">Emneno</NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 items-center">
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
          <li className="relative">
            <NavLink
              to="/wishlist"
              className="hover:underline flex items-center"
            >
              {/* Change the heart icon color to white */}
              <FontAwesomeIcon
                icon={faHeart}
                className="text-white text-lg mr-1"
              />
              Wishlist
              {wishlistItemsCount > 0 && (
                <span className="absolute top-0 -right-3 bg-yellow-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {wishlistItemsCount}
                </span>
              )}
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
          <li className="relative">
            <NavLink to="/cart" className="hover:underline flex items-center">
              <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
              {cartItemsCount > 0 && (
                <span className="absolute top-0 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
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
                    className="p-2 flex items-center hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategoryClick(category.name)}
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-8 h-8 rounded mr-2"
                    />
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <NavLink to="/cart" className="relative flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
            {cartItemsCount > 0 && (
              <span className="absolute top-0 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </NavLink>
          <NavLink to="/wishlist" className="relative flex items-center">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-lg text-white-500"
            />
            {wishlistItemsCount > 0 && (
              <span className="absolute top-0 -right-3 bg-yellow-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {wishlistItemsCount}
              </span>
            )}
          </NavLink>
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
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
                to="/wishlist"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block hover:underline ${
                    isActive ? "underline font-bold" : ""
                  }`
                }
              >
                <FontAwesomeIcon icon={faHeart} className="text-lg mr-1" />
                Wishlist
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
              <input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="p-2 rounded border border-gray-300 text-black w-full"
              />
              {filteredCategories.length > 0 && (
                <div className="bg-white text-black mt-2 shadow-lg rounded">
                  <ul>
                    {filteredCategories.map((category, index) => (
                      <li
                        key={index}
                        className="p-2 flex justify-between hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleCategoryClick(category.name)}
                      >
                        <span>{category.name}</span>
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-8 h-8 rounded"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
