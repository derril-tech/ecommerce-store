import React from "react";
import "./CategoryCard.css";

function CategoryCard({ title, image }) {
  return (
    <div className="category-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default CategoryCard;
