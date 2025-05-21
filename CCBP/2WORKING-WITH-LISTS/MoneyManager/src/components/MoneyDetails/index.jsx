import "./index.css";

const MoneyDetails = (props) => {
    const { incomeAmount, expensesAmount, balanceAmount } = props
    return (

    <div className="money-details">
        <p>Balance: Rs {balanceAmount}</p>
        <p>Income: Rs {incomeAmount}</p>
        <p>Expenses: Rs {expensesAmount}</p>
    </div>
)
};

export default MoneyDetails;
