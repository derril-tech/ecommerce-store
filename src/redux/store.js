import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice"; // Import the cart reducer

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer, // Add cart reducer
  },
});

export default store;
