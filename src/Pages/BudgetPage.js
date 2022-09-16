import React from "react";
// import AddBtn from "./AddBtn";
import AddExp from "../Component/AddExp";
import styles from "../styles/head.module.css";
import Card from "../Component/Card";

export default function BudgetPage() {
  return (
    <>
      <div class="container">
        <header class={styles.headerHolder}>
          <h1>Budgets</h1>
          <div class={styles.budgetsBtnHolder}>
            <AddExp
              title={"Add Budget"}
              Heading={"New Budget"}
              target={"offcanvasAddBudget"}
              addAbout={"Name"}
              amount={"Maximum Spending"}
              budgetSelector={false}
              class={"btn btn-primary"}
            />
            <AddExp
              title={"Add Expenes"}
              Heading={"New Expenes"}
              target={"offcanvasExpense"}
              addAbout={"Description"}
              amount={"Amount"}
              budgetSelector={true}
              class={"btn btn-outline-primary ms-1"}
            />
          </div>
        </header>
        <hr />
        <Card />
      </div>
    </>
  );
}
