import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    user: userSlice,
  },
});

export default store;
