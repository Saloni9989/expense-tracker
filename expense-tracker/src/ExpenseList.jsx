function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p>No expenses found</p>;
  }

  return (
    <>
      {expenses.map(exp => (
        <div className="expense-item" key={exp.id}>
          <span>{exp.title} (₹{exp.amount})</span>
          <button onClick={() => onDelete(exp.id)}>❌</button>
        </div>
      ))}
    </>
  );
}

export default ExpenseList;
