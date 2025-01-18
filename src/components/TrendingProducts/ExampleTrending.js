import React from "react";
import TrendingProducts from "./TrendingProducts";

const products = [
  { id: 1, image: "/images/laptop.jpg", name: "Laptop", price: "$999" },
  { id: 2, image: "/images/phone.jpg", name: "Smartphone", price: "$699" },
  { id: 3, image: "/images/headphones.jpg", name: "Headphones", price: "$199" },
  { id: 4, image: "/images/watch.jpg", name: "Smartwatch", price: "$299" },
];

const ExampleTrending = () => (
  <div>
    <TrendingProducts products={products} />
  </div>
);

export default ExampleTrending;
