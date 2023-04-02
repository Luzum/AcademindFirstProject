import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expenseItems = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  let expensesContent = expenseItems;
  if (!expenseItems.length) {
    expensesContent = (
      <h2 className="expenses-list__fallback">Found no expenses.</h2>
    );
  }

  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
