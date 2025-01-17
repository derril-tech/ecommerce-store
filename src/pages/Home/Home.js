import React from "react";
import Banner from "../../components/Banner/Banner";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";

const dummyCategories = [
  { title: "Electronics", image: "/images/electronics.jpg" },
  { title: "Fashion", image: "/images/fashion.jpg" },
];

const dummyTrendingProducts = [
  { id: 1, name: "Smartphone", price: "$499", image: "/images/phone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
];

function Home() {
  return (
    <div>
      <Banner />
      <section className="categories">
        <h2>Featured Categories</h2>
        <div className="categories-grid">
          {dummyCategories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>
      <TrendingProducts products={dummyTrendingProducts} />
    </div>
  );
}

export default Home;
