import { createSlice } from "@reduxjs/toolkit";

// Initial state for discounts
const initialState = {
  activeDiscount: null, // Current discount from the spin
  isModalOpen: false, // To toggle the spin modal
  discountHistory: [], // Track claimed discounts
};

const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
    setDiscount(state, action) {
      state.activeDiscount = action.payload;
      state.discountHistory.push(action.payload);
    },
    clearDiscount(state) {
      state.activeDiscount = null;
    },
  },
});

export const { openModal, closeModal, setDiscount, clearDiscount } =
  discountSlice.actions;
export default discountSlice.reducer;
