import { createSlice } from "@reduxjs/toolkit";

const dummyProducts = [
  {
    id: 1,
    name: "Smartphone",
    price: 499, // Updated to a number
    image: "/images/laptop.jpg",
    description: "Latest smartphone with amazing features",
  },
  {
    id: 2,
    name: "Laptop",
    price: 999, // Updated to a number
    image: "/images/phone.jpg",
    description: "High-performance laptop for professionals",
  },
  {
    id: 3,
    name: "Headphones",
    price: 199, // Updated to a number
    image: "/images/headphones.jpg",
    description: "High-quality headphones for music lovers",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 299, // Updated to a number
    image: "/images/watch.jpg",
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
