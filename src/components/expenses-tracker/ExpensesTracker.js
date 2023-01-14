import React, { useState } from "react";
import "./ExpnensesTracker.css";

export const ExpensesTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({
    name: "",
    amount: "",
    category: "",
  });

  const [totalExpenses, setTotalExpenses] = useState({
    food: 0,
    travel: 0,
    shopping: 0,
    other: 0,
  });

  const [percentBreakdown, setPercentBreakdown] = useState({
    food: 25,
    travel: 25,
    shopping: 25,
    other: 25,
  });

  const categories = {
    food: "Food",
    travel: "Travel",
    shopping: "Shopping",
    other: "Other",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expense.name) {
      alert("Expense Name required");
      return;
    }
    if (!expense.amount || expense.amount <= 0) {
      alert("Expense Amount required and should be greater than 0");
      return;
    }
    if (!expense.category) {
      alert("Please Choose Expense Type");
      return;
    }
    setExpenses([...expenses, expense]);
    setExpense({ name: "", amount: "", category: "" });

    const updatedTotalExpenses = {
      ...totalExpenses,
      [expense.category.toLowerCase()]:
        totalExpenses[expense.category.toLowerCase()] + Number(expense.amount),
    };
    setTotalExpenses(updatedTotalExpenses);

    // calculate expense breakdown
    const total = Object.values(updatedTotalExpenses).reduce(
      (acc, cur) => acc + cur
    );
    setPercentBreakdown({
      food: Math.round((updatedTotalExpenses.food / total) * 100),
      travel: Math.round((updatedTotalExpenses.travel / total) * 100),
      shopping: Math.round((updatedTotalExpenses.shopping / total) * 100),
      other: Math.round((updatedTotalExpenses.other / total) * 100),
    });
  };

  return (
    <div className="mt-50 layout-column justify-content-center align-items-center">
      <div>
        <form onSubmit={handleSubmit}>
          <section
            className="my-30 layout-row align-items-center justify-content-center"
            style={{ width: "1000px" }}
          >
            <input
              type="text"
              placeholder="New Expense"
              style={{ width: "40%", marginRight: "10px" }}
              name="name"
              value={expense.name}
              onChange={handleChange}
              data-testid="expense-name"
            />
            <input
              type="number"
              placeholder="Enter Amount"
              style={{ width: "40%" }}
              name="amount"
              value={expense.amount}
              onChange={handleChange}
              data-testid="expense-amount"
            />

            <select
              className="ml-2"
              name="category"
              value={expense.category}
              onChange={handleChange}
              data-testid="expense-type"
            >
              <option value="" disabled selected>
                Select Type
              </option>
              <option data-testid="expense-type-1" value={"Food"}>
                Food
              </option>
              <option data-testid="expense-type-2" value={"Travel"}>
                Travel
              </option>
              <option data-testid="expense-type-3" value={"Shopping"}>
                Shopping
              </option>
              <option data-testid="expense-type-4" value={"Other"}>
                Other
              </option>
            </select>
            <button
              type="submit"
              style={{ width: "20%" }}
              data-testid="expense-submit-button"
            >
              Add Expense
            </button>
          </section>
        </form>
      </div>
      <div className="flex" style={{ width: "100%" }}>
        <div style={{ width: "48%" }} className="mx-5 m-10 card">
          <p className="title">Expense List</p>
          <table>
            <thead>
              <tr>
                <td>Sr No</td>
                <td>Expense</td>
                <td>Amount</td>
                <td>Catagory</td>
              </tr>
            </thead>
            <tbody>
              {expenses.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card ml-5 m-10" style={{ width: "50%" }}>
          <p className="title">Expenses Breakdown</p>
          <br />
          <div style={{ height: "30px", display: "flex" }}>
            <div
              data-testid="expense-distribution-food"
              style={{
                width: `${percentBreakdown.food}%`,
              }}
              className="lightblue"
            ></div>
            <div
              data-testid="expense-distribution-travel"
              style={{
                width: `${percentBreakdown.travel}%`,
              }}
              className="red"
            ></div>
            <div
              data-testid="expense-distribution-shopping"
              style={{
                width: `${percentBreakdown.shopping}%`,
              }}
              className="lightgreen"
            ></div>
            <div
              data-testid="expense-distribution-other"
              style={{
                width: `${percentBreakdown.other}%`,
              }}
              className="orange"
            ></div>
          </div>
          <br />
          <div className="flex ml-10 mb-2">
            <div className="lightblue hight-20 width-20"></div> &nbsp; Food
          </div>
          <div className="flex ml-10 mb-2">
            <div className="red hight-20 width-20"></div> &nbsp; Travel
          </div>
          <div className="flex ml-10 mb-2">
            <div className="lightgreen hight-20 width-20"></div> &nbsp; Shopping
          </div>
          <div className="flex ml-10 mb-10">
            <div className="orange hight-20 width-20"></div> &nbsp; Other
          </div>
        </div>
      </div>
    </div>
  );
};
