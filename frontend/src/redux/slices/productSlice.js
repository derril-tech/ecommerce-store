import { createSlice } from "@reduxjs/toolkit";

const dummyProducts = [
  {
    id: 2,
    name: "Laptop",
    price: 999,
    image: "/images/laptop-front.jpg",
    images: [
      "/images/laptop-front.png",
      "/images/laptop-back.png",
      "/images/laptop-side.png",
    ],
    description: "High-performance laptop for professionals",
    rating: 0, // ⭐ Initialize rating field
  },
  {
    id: 1,
    name: "Smartphone",
    price: 499,
    image: "/images/smartphone-front.jpg",
    images: [
      "/images/smartphone-front.png",
      "/images/smartphone-back.png",
      "/images/smartphone-side.png",
    ],
    description: "Latest smartphone with amazing features",
    rating: 0, // ⭐ Initialize rating field
  },
  {
    id: 3,
    name: "Headphones",
    price: 199,
    image: "/images/headphones-front.jpg",
    images: [
      "/images/headphones-front.png",
      "/images/headphones-back.png",
      "/images/headphones-side.png",
    ],
    description: "High-quality headphones for music lovers",
    rating: 0, // ⭐ Initialize rating field
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 299,
    image: "/images/smartwatch-front.jpg",
    images: [
      "/images/smartwatch-front.png",
      "/images/smartwatch-back.png",
      "/images/smartwatch-side.png",
    ],
    description: "Stylish smartwatch with advanced features",
    rating: 0, // ⭐ Initialize rating field
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
    updateProductRating(state, action) {
      const { id, rating } = action.payload;
      const product = state.items.find((item) => item.id === id);
      if (product) {
        product.rating = rating; // ✅ Store updated rating in Redux state
      }
    },
  },
});

export const { setProducts, updateProductRating } = productSlice.actions;
export default productSlice.reducer;
