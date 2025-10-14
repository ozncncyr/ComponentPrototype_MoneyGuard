import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loadeing: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: {
    [addTransaction.fulfilled]: (state, action) => {
      state.items.push(action.payload);
    },
    [removeTransaction.fulfilled]: (state, action) => {
      const index = state.items.findIndex((tx) => tx.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addTransaction, removeTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
