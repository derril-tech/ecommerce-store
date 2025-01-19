import { createSlice } from "@reduxjs/toolkit";

const dummyProducts = [
  {
    id: 2,
    name: "Laptop",
    price: 999, // Updated to a number
    image: "/images/laptop-front.jpg", // Default fallback image
    images: [
      "/images/laptop-front.jpg",
      "/images/laptop-back.jpg",
      "/images/laptop-side.jpg",
    ], // Multiple images for 360-degree view
    description: "High-performance laptop for professionals",
  },
  {
    id: 1,
    name: "Smartphone",
    price: 499, // Updated to a number
    image: "/images/smartphone-front.jpg", // Default fallback image
    images: [
      "/images/smartphone-front.png",
      "/images/smartphone-back.png",
      "/images/smartphone-side.png",
    ], // Multiple images for 360-degree view
    description: "Latest smartphone with amazing features",
  },

  {
    id: 3,
    name: "Headphones",
    price: 199, // Updated to a number
    image: "/images/headphones-front.jpg", // Default fallback image
    images: [
      "/images/headphones-front.jpg",
      "/images/headphones-back.jpg",
      "/images/headphones-side.jpg",
    ], // Multiple images for 360-degree view
    description: "High-quality headphones for music lovers",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 299, // Updated to a number
    image: "/images/smartwatch-front.jpg", // Default fallback image
    images: [
      "/images/smartwatch-front.jpg",
      "/images/smartwatch-back.jpg",
      "/images/smartwatch-side.jpg",
    ], // Multiple images for 360-degree view
    description: "Stylish smartwatch with advanced features",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: dummyProducts,
  },
  reducers: {
    setProducts(state, action) {
      console.log("setProducts action payload:", action.payload);
      state.items = action.payload;
      console.log("Updated products in Redux:", state.items);
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
