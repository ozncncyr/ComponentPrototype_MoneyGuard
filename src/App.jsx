import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTransactions } from "./redux/transactions/operations";
import TransactionList from "./components/TransactionsList/TransactionsList";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Transaction History</h1>
      <TransactionList />
    </div>
  );
}

export default App;
