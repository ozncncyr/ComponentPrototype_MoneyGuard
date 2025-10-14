import { createSlice } from "@reduxjs/toolkit";
import { fetchTransactions } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, handlePending)
      .addCase(fetchTransactions.rejected, handleRejected)
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(...action.payload);
      });
  },
});

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
