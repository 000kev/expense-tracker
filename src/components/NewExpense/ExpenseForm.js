import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("0.00");
  const [inputDate, setInputDate] = useState("2023-09-10");
  const [show, showExpenseForm] = useState(false);
  // OR
  // const [userInput, setUserInput] = useState({
  //     inputTitle: '',
  //     inputAmount: '',
  //     inputDate: ''
  // })

  //1.  const titleChangeHandler = event => {
  //     setUserInput({
  //         ...userInput,
  //         inputTitle: event.target.value,
  //     })
  // }

  //2.  const titleChangeHandler = (event) => {
  //     setUserInput( prevState => {
  //         return {...prevState, inputTitle: event.target.value};
  //     })
  // }

  // 1.
  // const titleChangeHandler = event => setInputTitle(event.target.value);
  // const amountChangeHandler = event => setInputAmount(event.target.value);
  // const dateChangeHandler = event => setInputDate(event.target.value)

  // 2. alternatively to 3 handlers, we can have one handler that handles them all
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setInputTitle(value);
    } else if (identifier === "date") {
      setInputDate(value);
    } else {
      setInputAmount(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault(); // prevents the request being sent to server
    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    props.onSaveExpenseData(expenseData);
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
    showExpenseForm(false);
    // console.log(expenseData);
  };

  const showForm = (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={inputTitle}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={inputAmount}
            min="0.01"
            step="0.01"
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={inputDate}
            min="2021-01-01"
            max="2023-12-31"
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
        <div className="new-expense__actions">
          <button
            onClick={() => {
              showExpenseForm(false);
            }}
          >
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );

  if (show === false) {
    return (
      <div className="new-expense__show">
        <button
          onClick={() => {
            showExpenseForm(true);
            setInputTitle("");
            setInputAmount("");
            setInputDate("");
          }}
        >
          Add New Expense
        </button>
      </div>
    );
  } else {
    return <div>{showForm}</div>;
  }
};

export default ExpenseForm;
