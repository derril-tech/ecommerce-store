import React from "react";
// import TrendingProducts from "./TrendingProducts"; // Old TrendingProducts import
import ProductCard from "../ProductCard/ProductCard";

const products = [
  { id: 1, image: "/images/laptop.jpg", name: "Laptop", price: "$999" },
  { id: 2, image: "/images/phone.jpg", name: "Smartphone", price: "$699" },
  { id: 3, image: "/images/headphones.jpg", name: "Headphones", price: "$199" },
  { id: 4, image: "/images/watch.jpg", name: "Smartwatch", price: "$299" },
];

const ExampleTrending = () => (
  <div>
    {/* Old code for using TrendingProducts */}
    {/* <TrendingProducts products={products} /> */}

    {/* Direct rendering of ProductCard components */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ExampleTrending;
