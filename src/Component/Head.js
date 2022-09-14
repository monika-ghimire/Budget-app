import React from "react";
import AddBtn from "./AddBtn";
import AddExp from "./AddExp";
import styles from '../styles/head.module.css'

export default function Head() {
  return (
    <>
      <div class="container">
        <header class={styles.headerHolder}>
          <h1>Budgets</h1>
          <div class={styles.budgetsBtnHolder}></div>
          <div><AddBtn/></div>
         
         <div><AddExp/></div>
        </header>
      </div>
    </>
  );
}
