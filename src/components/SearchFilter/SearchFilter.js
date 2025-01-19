import React, { useState } from "react";

const products = [
  { id: 1, name: "Laptops", category: "Electronics", price: 999 },
  { id: 2, name: "Smartphones", category: "Electronics", price: 699 },
  { id: 3, name: "Headphones", category: "Accessories", price: 199 },
  { id: 4, name: "Smartwatches", category: "Accessories", price: 299 },
  { id: 5, name: "T-shirts", category: "Fashion", price: 29 },
];

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter products based on search query and selected category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>

      <div className="mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
          <option value="Fashion">Fashion</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded p-4 shadow"
          >
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-500">{product.category}</p>
            {/* Price tag intentionally removed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
