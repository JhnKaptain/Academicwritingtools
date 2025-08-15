import React from "react";
import ServiceCard from "./ServiceCard";
import "./Category.css";

const Category = ({ category, onOrderClick }) => {
  return (
    <section
      id={category.category.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}
      className="category-section"
      style={{ backgroundColor: category.bgColor }}
    >
      <h2 className="category-title">{category.category}</h2>
      <div className="card-grid">
        {category.items.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            onOrderClick={onOrderClick}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
