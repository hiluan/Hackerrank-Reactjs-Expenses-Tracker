// ● Test adding multiple expenses

// TestingLibraryElementError: Unable to find an element by: [data-testid="expense-list-0"]

import React from "react";
import "./ExpnensesTracker.css";
export const ExpensesTracker = () => {
  const initialState = {
    name: "",
    amount: "",
    catagory: "",
  };

  return (
    <div className="mt-50 layout-column justify-content-center align-items-center">
      <div>
        <form>
          <section
            className="my-30 layout-row align-items-center justify-content-center"
            style={{ width: "1000px" }}
          >
            <input
              type="text"
              placeholder="New Expense"
              style={{ width: "40%", marginRight: "10px" }}
              name="name"
              data-testid="expense-name"
            />
            <input
              type="number"
              placeholder="Enter Amount"
              style={{ width: "40%" }}
              name="amount"
              data-testid="expense-amount"
            />
            <select className="ml-2" name="catagory" data-testid="expense-type">
              <option value={""}>Select Type</option>
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
              <tr>
                <td>1</td>
                <td>Expense 1</td>
                <td>10</td>
                <td>Food</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Expense 2</td>
                <td>10</td>
                <td>Travel</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Expense 3</td>
                <td>10</td>
                <td>Shopping</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Expense 4</td>
                <td>10</td>
                <td>Other</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card ml-5 m-10" style={{ width: "50%" }}>
          <p className="title">Expenses Breakdown</p>
          <br />
          <div style={{ height: "30px", display: "flex" }}>
            <div
              data-testid="expense-distribution-food"
              style={{ width: "25%" }}
              className="lightblue"
            ></div>
            <div
              data-testid="expense-distribution-travel"
              style={{ width: "25% " }}
              className="red"
            ></div>
            <div
              data-testid="expense-distribution-shopping"
              style={{ width: "25%" }}
              className="lightgreen"
            ></div>
            <div
              data-testid="expense-distribution-other"
              style={{ width: "25%" }}
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
