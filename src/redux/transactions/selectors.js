export const selectTransactions = (state) => state.transactions.items;
export const selectLoading = (state) => state.transactions.loading;
export const selectError = (state) => state.transactions.error;
export const selectTotalAmount = (state) => {
  return state.transactions.items.reduce((total, transaction) => {
    return total + transaction.amount;
  }, 0);
};
