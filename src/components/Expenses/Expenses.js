import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

import "./Expenses.css";

export default function Expenses(props) {
  
  const [filterYear, setFilterYear] = useState("2023");
  const ExpenseFilterHandler = (selectionFilter) =>
    setFilterYear(selectionFilter);
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card>
      <ExpensesFilter
        selected={filterYear}
        onSelectionFilter={ExpenseFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
