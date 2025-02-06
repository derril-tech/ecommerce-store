import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productSlice";
import wishlistReducer from "./slices/wishlistSlice";
import reviewsReducer from "./slices/reviewsSlice"; // ✅ Import the new reviewsSlice

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    wishlist: wishlistReducer,
    reviews: reviewsReducer, // ✅ Add reviews to Redux store
  },
});

export default store;
