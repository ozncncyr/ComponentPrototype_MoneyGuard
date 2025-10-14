import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../redux/transactions/operations";
import css from "./TransactionsItem.module.css";

const TransactionsItem = ({ transaction }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTransaction(id));
  };
  return (
    <li className={css.transactionItem} key={transaction.id}>
      <div className={css.transactionData}>
        <p>{transaction.transactionDate}</p>
        <p>{transaction.type}</p>
        <p>{transaction.categoryId}</p>
      </div>
      <p>{transaction.comment}</p>
      <div className={css.btnWrapper}>
        <p className={css.amount}>{transaction.amount}</p>
        <button className={css.editBtn}>🖊️</button>
        <button
          className={css.deleteBtn}
          onClick={() => handleDelete(transaction.id)}
          title="Delete transaction"
        >
          🗑️
        </button>
      </div>
    </li>
  );
};

export default TransactionsItem;
