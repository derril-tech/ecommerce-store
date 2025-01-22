import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faHeart,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";
import SpinWheel from "../SpinWheel/SpinWheel"; // Import SpinWheel

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
  const [showSpinWheelModal, setShowSpinWheelModal] = useState(false);
  const navigate = useNavigate();

  console.log("Navbar rendered!");

  // Get cart item count from Redux
  const cartItemsCount = useSelector(
    (state) =>
      state.cart?.items.reduce((count, item) => count + item.quantity, 0) || 0
  );

  // Get wishlist item count from Redux
  const wishlistItemsCount = useSelector(
    (state) => state.wishlist?.items.length || 0
  );

  console.log("Cart Items Count:", cartItemsCount);
  console.log("Wishlist Items Count:", wishlistItemsCount);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    console.log("Mobile Menu Toggled:", !isMobileMenuOpen);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    console.log("Search Query Changed:", query);

    if (query.trim()) {
      setFilteredCategories(
        categories.filter((category) =>
          category.name.toLowerCase().includes(query.toLowerCase())
        )
      );
      console.log("Filtered Categories:", filteredCategories);
    } else {
      setFilteredCategories([]);
    }
  };

  const handleCategoryClick = (categoryName) => {
    console.log("Category Clicked:", categoryName);
    setSearchQuery("");
    setFilteredCategories([]);
    navigate(`/search?category=${categoryName}`);
  };

  const spinWheelOptions = [
    { label: "10% Off", color: "green" },
    { label: "Free Shipping", color: "blue" },
    { label: "20% Off", color: "red" },
    { label: "5% Off", color: "yellow" },
  ];

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
          <li>
            <button
              onClick={() => {
                console.log("Spin the Wheel clicked!");
                setShowSpinWheelModal(true);
              }}
              className="hover:underline flex items-center"
            >
              <FontAwesomeIcon
                icon={faGift}
                className="text-white text-lg mr-1"
              />
              Spin the Wheel
            </button>
          </li>
          <li className="relative">
            <NavLink
              to="/wishlist"
              className="hover:underline flex items-center"
            >
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
            <FontAwesomeIcon icon={faHeart} className="text-white text-lg" />
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
              <button
                onClick={() => {
                  console.log("Spin the Wheel clicked from mobile!");
                  setShowSpinWheelModal(true);
                }}
                className="hover:underline flex items-center"
              >
                <FontAwesomeIcon
                  icon={faGift}
                  className="text-white text-lg mr-1"
                />
                Spin the Wheel
              </button>
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

      {/* Spin the Wheel Modal */}
      {showSpinWheelModal && (
        <Modal
          isOpen={showSpinWheelModal}
          onClose={() => setShowSpinWheelModal(false)}
        >
          <SpinWheel
            options={spinWheelOptions}
            onSpinComplete={(prize) =>
              alert(`Congratulations! You won ${prize.label}`)
            }
          />
        </Modal>
      )}
    </nav>
  );
}

export default Navbar;
