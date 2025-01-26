import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Stores authenticated user
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload; // Sets the user data
    },
    clearUser(state) {
      state.user = null; // Clears user data
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
