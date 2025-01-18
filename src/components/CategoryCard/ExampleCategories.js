import React from "react";
import CategoryCard from "./CategoryCard";

const ExampleCategories = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <CategoryCard title="Electronics" image="/images/laptop.jpg" />
    <CategoryCard title="Fashion" image="/images/phone.jpg" />
    <CategoryCard title="Accessories" image="/images/hero-banner.jpg" />
  </div>
);

export default ExampleCategories;
