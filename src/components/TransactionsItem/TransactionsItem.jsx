import { useDispatch } from "react-redux";
import { selectTransactions } from "../../redux/transactions/selectors";
import css from "./TransactionsItem.module.css";

const TransactionsItem = ({ transaction }) => {
  const dispatch = useDispatch();

  return (
    <li className="transaction-item" key={transaction.id}>
      <p>{transaction.date}</p>
      <p>{transaction.type}</p>
      <p>{transaction.category}</p>
      <p>{transaction.comment}</p>
      <p>{transaction.amount}</p>
    </li>
  );
};

export default TransactionsItem;
