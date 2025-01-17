import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer, // Manages the cart state
    products: productReducer, // Manages product state
    user: userReducer, // Manages user state
  },
});

export default store;
