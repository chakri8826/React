const transactionTypeOptions = [
  {
    optionId: "INCOME",
    displayText: "Income",
  },
  {
    optionId: "EXPENSES",
    displayText: "Expenses",
  },
];

// Write your code here
import { Component } from "react";
import MoneyDetails from "../MoneyDetails";
import TransactionItem from "../TransactionItem";
import "./index.css";
import { v4 as uuidv4 } from "uuid";

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    title: "",
    amount: "",
    typeInp: transactionTypeOptions[0].optionId,
  };

  onChangeUpdate = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddTransaction = (e) => {
    e.preventDefault();
    const { title, amount, typeInp } = this.state;
    const newTransaction = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      typeInp,
    };
    this.setState((prevState) => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: "",
      amount: "",
      typeInp: transactionTypeOptions[0].optionId,
    }));
  };

  //   getIncomeAmount = () => {
  //     const { transactionsList } = this.state;
  //     let total = 0;
  //     for (let i = 0; i < transactionsList.length; i++) {
  //       if (transactionsList[i].typeInp === "INCOME") {
  //         total += transactionsList[i].amount;
  //       }
  //     }
  //     return total;
  //   };

  getIncomeAmount = () => {
    const { transactionsList } = this.state;
    return transactionsList
      .filter((txn) => txn.typeInp === "INCOME")
      .reduce((acc, txn) => acc + txn.amount, 0);
  };

  //   getExensesAmount = () => {
  //     const { transactionsList } = this.state;
  //     let total = 0;
  //     for (let i = 0; i < transactionsList.length; i++) {
  //       if (transactionsList[i].typeInp === "EXPENSES") {
  //         total += transactionsList[i].amount;
  //       }
  //     }
  //     return total;
  //   };

  getExensesAmount = () => {
    const { transactionsList } = this.state;
    return transactionsList
      .filter((txn) => txn.typeInp === "EXPENSES")
      .reduce((acc, txn) => acc + txn.amount, 0);
  };

  deleteTransaction = (id) => {
    this.setState((prevState) => ({
      transactionsList: prevState.transactionsList.filter(
        (txn) => txn.id != id
      ),
    }));
  };

  render() {
    const { title, amount, typeInp, transactionsList } = this.state;
    const incomeAmount = this.getIncomeAmount();
    const expensesAmount = this.getExensesAmount();
    const balanceAmount = incomeAmount - expensesAmount;
    return (
      <div className="app-container">
        <h1>Money Manager</h1>
        <MoneyDetails
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
          balanceAmount={balanceAmount}
        />

        <form onSubmit={this.onAddTransaction} className="form">
          <input
            name="title"
            type="text"
            value={title}
            onChange={this.onChangeUpdate}
            placeholder="Title"
          />
          <input
            name="amount"
            type="number"
            value={amount}
            onChange={this.onChangeUpdate}
            placeholder="Amount"
          />

          <select name="typeInp" value={typeInp} onChange={this.onChangeUpdate}>
            {transactionTypeOptions.map((option) => (
              <option key={option.optionId} value={option.optionId}>
                {option.displayText}
              </option>
            ))}
          </select>
          <button type="submit">Add</button>
        </form>

        <div className="transactions-history">
          <div className="transactions-header">
            <p className="header-title">Title</p>
            <p className="header-amount">Amount</p>
            <p className="header-type">Type</p>
            <p className="header-action">Action</p>
          </div>
          <ul className="transactions-list">
            {transactionsList.map((txn) => (
              <TransactionItem
                key={txn.id}
                transaction={txn}
                deleteTransaction={this.deleteTransaction}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default MoneyManager;
