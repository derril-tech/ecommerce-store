import React from "react";
import ProductCard from "./ProductCard";

const ExampleProductCards = () => {
  const products = [
    {
      image: "/images/laptop.jpg",
      name: "Laptop",
      price: "$999",
    },
    {
      image: "/images/phone.jpg",
      name: "Smartphone",
      price: "$699",
    },
    {
      image: "/images/headphones.jpg",
      name: "Headphones",
      price: "$199",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ExampleProductCards;
