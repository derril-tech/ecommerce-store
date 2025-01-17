import React from "react";
import { useSelector } from "react-redux";
import Banner from "../../components/Banner/Banner";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";

const dummyCategories = [
  { title: "Electronics", image: "/images/electronics.jpg" },
  { title: "Fashion", image: "/images/fashion.jpg" },
];

function Home() {
  const products = useSelector((state) => state.products.items);

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
      <TrendingProducts products={products} />
    </div>
  );
}

export default Home;
