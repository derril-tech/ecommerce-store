import React from "react";
import CategoryCard from "./CategoryCard";

const ExampleCategories = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <CategoryCard title="Electronics" image="/images/watch.jpg" />
    <CategoryCard title="Fashion" image="/images/watch.jpg" />
    <CategoryCard title="Accessories" image="/images/watch.jpg" />
  </div>
);

export default ExampleCategories;
