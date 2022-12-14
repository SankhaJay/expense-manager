import React, { useState } from "react";

import "./App.css";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

const sampleExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(sampleExpenses);

  const addExpenseDataHandler = (expenseDataEntered) => {
    setExpenses((prevState) => {
      return [expenseDataEntered, ...prevState];
    });
  };
  
  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
