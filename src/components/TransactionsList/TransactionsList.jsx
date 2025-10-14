import { useSelector } from "react-redux";
import { selectTransactions } from "../../redux/transactions/selectors";
import TransactionsItem from "../TransactionsItem/TransactionsItem";
import css from "./TransactionsList.module.css";

const TransactionList = () => {
  const transactions = useSelector(selectTransactions);

  return (
    <ul className={css.transactionList}>
      {transactions.map((transaction) => (
        <TransactionsItem key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
};

export default TransactionList;
