import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactions/slice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});
