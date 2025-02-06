import { createSlice } from "@reduxjs/toolkit";

// 🔹 Dummy review data (Each review belongs to a product via productId)
const initialState = {
  items: [
    { id: 1, productId: 1, rating: 5, comment: "Great phone!", user: "Alice" },
    { id: 2, productId: 1, rating: 4, comment: "Good quality!", user: "Bob" },
    { id: 3, productId: 2, rating: 3, comment: "Not bad", user: "Charlie" },
    { id: 4, productId: 3, rating: 5, comment: "Awesome!", user: "David" },
    { id: 5, productId: 3, rating: 4, comment: "Very good!", user: "Emma" },
    {
      id: 6,
      productId: 4,
      rating: 2,
      comment: "Expected better",
      user: "Frank",
    },
  ],
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview(state, action) {
      state.items.push(action.payload);
    },
  },
});

// 🔹 Export actions & reducer
export const { addReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;
