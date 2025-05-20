import "./index.css";

const TransactionItem = ({ transaction, deleteTransaction }) => {
  const { id, title, amount, typeInp } = transaction;
  const displayType = typeInp === "INCOME" ? "Income" : "Expenses";

  const onDelete=()=>{
    deleteTransaction(id)
  }
  return (
    <li className="transaction-item">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{displayType}</p>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TransactionItem;
