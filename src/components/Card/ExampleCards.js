import React from "react";
import Card from "./Card";

const ExampleCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <Card
      image="/images/laptop.jpg"
      title="Laptop"
      description="High-performance laptops for all your needs."
      buttonText="Shop Now"
      onButtonClick={() => alert("Laptop clicked!")}
    />
    <Card
      image="/images/watch.jpg"
      title="Smartphone"
      description="Stay connected with the latest smartphones."
      buttonText="Shop Now"
      onButtonClick={() => alert("Smartphone clicked!")}
    />
    <Card
      image="/images/watch.jpg"
      title="Accessories"
      description="Find the perfect accessories for your devices."
      buttonText="Shop Now"
      onButtonClick={() => alert("Accessories clicked!")}
    />
  </div>
);

export default ExampleCards;
