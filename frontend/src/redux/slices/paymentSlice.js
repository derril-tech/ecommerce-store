import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const processPayment = createAsyncThunk(
  "payment/process",
  async ({ amount, currency, paymentMethodId }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/payment/process", {
        amount,
        currency,
        paymentMethodId,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: { status: "idle", paymentId: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(processPayment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(processPayment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.paymentId = action.payload.paymentId;
      })
      .addCase(processPayment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default paymentSlice.reducer;
