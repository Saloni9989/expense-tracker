import { useState } from "react";

function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    onAdd({
      id: Date.now(),
      title,
      amount,
      category
    });

    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Expense Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        required
      />

      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
      </select>

      <button>Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
