import React from "react";
import ProductCard from "./ProductCard";

const ExampleProductCards = () => {
  const products = [
    {
      image: "/images/watch.jpg",
      name: "Laptop",
      price: "$999",
    },
    {
      image: "/images/watch.jpg",
      name: "Smartphone",
      price: "$699",
    },
    {
      image: "/images/watch.jpg",
      name: "Headphones",
      price: "$199",
    },
    {
      image: "/images/watch.jpg",
      name: "Watch",
      price: "$250",
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
