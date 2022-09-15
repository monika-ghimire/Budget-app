import React from "react";
import AddBtn from "./AddBtn";
import AddExp from "./AddExp";
import styles from '../styles/head.module.css'
import Card from "./Card";


export default function Head() {
  return (
    <>
      <div class="container">
        <header class={styles.headerHolder}>
          <h1>Budgets</h1>
          <div class={styles.budgetsBtnHolder}>
            <AddBtn/>
            <AddExp/>
         </div>
        </header>
        <hr/>
       <Card/>
      </div>
    </>
  );
}
