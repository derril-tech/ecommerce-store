import React from "react";
import Banner from "../../components/Banner/Banner";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";

const products = [
  { id: 1, image: "/images/laptop.jpg", name: "Laptop", price: "$999" },
  { id: 2, image: "/images/phone.jpg", name: "Smartphone", price: "$699" },
  { id: 3, image: "/images/headphones.jpg", name: "Headphones", price: "$199" },
];

const Home = () => (
  <div className="space-y-10">
    {/* Hero Banner */}
    <Banner />

    {/* Featured Categories */}
    <section className="categories px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Featured Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <CategoryCard title="Electronics" image="/images/laptop.jpg" />
        <CategoryCard title="Fashion" image="/images/phone.jpg" />
        <CategoryCard title="Accessories" image="/images/headphones.jpg" />
      </div>
    </section>

    {/* Trending Products */}
    <section className="trending-products px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Trending Products</h2>
      <TrendingProducts products={products} />
    </section>
  </div>
);

export default Home;
