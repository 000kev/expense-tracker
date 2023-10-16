import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    // useState is a react hook that always returns 2 variables

  
    // const expenseDate = new Date(2023, 10, 5);
    // const expenseTitle = "Egg Insurance";
    // const expenseAmount = 100;

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">R{props.amount}</div>
            </div>
            {/* here you do not add parantheses otherwise javacript will execute the code immediately
            instead we pass a POINTER to onClick so that the function is not executed immediately*/}
        </Card>
    );
}

export default ExpenseItem;