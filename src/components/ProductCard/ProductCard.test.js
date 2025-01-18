import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "./ProductCard";

describe("ProductCard Component", () => {
  const mockProduct = {
    image: "/images/laptop.jpg",
    name: "Laptop",
    price: "$999",
  };

  it("renders the product image, name, and price", () => {
    render(<ProductCard product={mockProduct} />);

    // Assert the product image is rendered
    const productImage = screen.getByAltText(mockProduct.name);
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute("src", mockProduct.image);

    // Assert the product name is rendered
    const productName = screen.getByText(mockProduct.name);
    expect(productName).toBeInTheDocument();

    // Assert the product price is rendered
    const productPrice = screen.getByText(mockProduct.price);
    expect(productPrice).toBeInTheDocument();
  });

  it("calls a function when the button is clicked", () => {
    const handleClick = jest.fn();
    render(
      <ProductCard
        product={mockProduct}
        onAddToCart={handleClick} // Assuming ProductCard supports this
      />
    );

    // Simulate a button click
    const addToCartButton = screen.getByText("Add to Cart");
    userEvent.click(addToCartButton);

    // Assert the click handler was called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
