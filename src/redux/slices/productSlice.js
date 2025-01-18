import { createSlice } from "@reduxjs/toolkit";

const dummyProducts = [
  {
    id: 1,
    name: "Smartphone",
    price: 499,
    image: "/images/watch.jpg",
    description: "Latest smartphone with amazing features",
  },
  {
    id: 2,
    name: "Laptop",
    price: 999,
    image: "/images/watch.jpg",
    description: "High-performance laptop for professionals",
  },
  {
    id: 3,
    name: "Headphones",
    price: 199,
    image: "/images/watch.jpg",
    description: "High-quality headphones for music lovers",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 299,
    image: "/images/watch.jpg",
    description: "Stylish smartwatch with advanced features",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: dummyProducts, // Initial dummy data
    status: "idle", // Loading state
  },
  reducers: {
    setProducts(state, action) {
      console.log("Action: setProducts", action.payload); // Log payload
      console.log("Previous State:", state.items); // Log previous state
      state.items = action.payload; // Update product list
      console.log("Updated State:", state.items); // Log updated state
    },
    addProduct(state, action) {
      console.log("Action: addProduct", action.payload); // Log added product
      state.items.push(action.payload); // Add a new product
      console.log("Updated State after addProduct:", state.items); // Log updated state
    },
    removeProduct(state, action) {
      console.log("Action: removeProduct", action.payload); // Log removed product ID
      state.items = state.items.filter((item) => item.id !== action.payload); // Remove a product
      console.log("Updated State after removeProduct:", state.items); // Log updated state
    },
  },
});

console.log("Initial products in Redux:", dummyProducts); // Log initial state

export const { setProducts, addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
