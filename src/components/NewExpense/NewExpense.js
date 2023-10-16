import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const expenseDataHandler = (inputExpenseData) => {
        const expenseData = {
            ...inputExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        console.log(expenseData);
    }
    
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={expenseDataHandler}/>
        </div>
    );
};

export default NewExpense;