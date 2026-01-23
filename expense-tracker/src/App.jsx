import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./expenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  // 🔹 FILTER LOGIC (INSIDE APP)
  const visibleExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter(exp => exp.category === selectedCategory);

  // 🔹 TOTAL AMOUNT
  const totalAmount = visibleExpenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0
  );

  return (
    <div className="container">
      <h2>Expense Tracker</h2>

      <ExpenseForm onAdd={addExpense} />

      {/* CATEGORY FILTER */}
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
      </select>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={deleteExpense}
      />

      <h3>Total Spent: ₹{totalAmount}</h3>
    </div>
  );
}

export default App;
