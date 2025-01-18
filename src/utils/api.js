import { addProduct } from "./utils/api";

const handleAddProduct = async () => {
  const newProduct = {
    name: "Tablet",
    price: 499,
    description: "A versatile tablet for work and play",
    image: "/images/tablet.jpg",
  };

  try {
    const response = await addProduct(newProduct);
    console.log("Product added successfully:", response);
  } catch (error) {
    console.error("Failed to add product:", error.message);
  }
};
