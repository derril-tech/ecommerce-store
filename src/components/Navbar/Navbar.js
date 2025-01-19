import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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

  console.log("Navbar rendered"); // Debug log
  console.log("Search query:", searchQuery); // Debug log
  console.log("Filtered categories:", filteredCategories); // Debug log

  // Get the total cart item count from Redux
  const cartItemsCount = useSelector((state) => {
    console.log("Redux cart state:", state.cart); // Debug log
    return state.cart.items.reduce((count, item) => count + item.quantity, 0);
  });

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
    console.log(`Navigate to category: ${categoryName}`); // Debug log
  };

  return (
    <nav className="bg-green-500 text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <NavLink to="/">Emneno</NavLink>
        </div>
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
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `hover:underline ${isActive ? "underline font-bold" : ""}`
              }
            >
              Cart
              {cartItemsCount > 0 && (
                <span className="bg-red-500 text-white rounded-full text-xs ml-2 px-2">
                  {cartItemsCount}
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
