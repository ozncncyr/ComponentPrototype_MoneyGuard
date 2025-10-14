import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
} from "./operations";

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
        state.items = action.payload;
      })
      .addCase(addTransaction.pending, handlePending)
      .addCase(addTransaction.rejected, handleRejected)
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(deleteTransaction.pending, handlePending)
      .addCase(deleteTransaction.rejected, handleRejected)
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(updateTransaction.pending, handlePending)
      .addCase(updateTransaction.rejected, handleRejected)
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export default transactionsSlice.reducer;
