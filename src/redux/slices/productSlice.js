import { createSlice } from "@reduxjs/toolkit";

const dummyProducts = [
  {
    id: 1,
    name: "Smartphone",
    price: 499,
    image: "/images/phone.jpg",
    description: "Latest smartphone with amazing features",
  },
  {
    id: 2,
    name: "Laptop",
    price: 999,
    image: "/images/laptop.jpg",
    description: "High-performance laptop for professionals",
  },
  {
    id: 3,
    name: "Watches",
    price: 199,
    image: "/images/watch.jpg",
    description: "High-quality headphones for music lovers",
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
      state.items = action.payload; // Update product list
    },
    addProduct(state, action) {
      state.items.push(action.payload); // Add a new product
    },
    removeProduct(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload); // Remove a product
    },
  },
});

export const { setProducts, addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
