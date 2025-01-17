import { createSlice } from "@reduxjs/toolkit";

const dummyProducts = [
  {
    id: 1,
    name: "Smartphone",
    price: "$499",
    image: "/images/phone.jpg",
    description: "Latest smartphone with amazing features",
  },
  {
    id: 2,
    name: "Laptop",
    price: "$999",
    image: "/images/laptop.jpg",
    description: "High-performance laptop for professionals",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: dummyProducts, // Use dummy data here
    status: "idle", // Add status for loading/error
  },
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
