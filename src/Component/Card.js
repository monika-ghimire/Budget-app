import React from "react";
import styles from "../styles/head.module.css";
import AddExp from "./AddExp";
import {Link} from 'react-router-dom'

export default function Card() {
  let listOfBudget = [
    { topics: "Food", money: "$400 / $200",width:"75%" },
    { topics: "Movies", money: "$40 / $00",width:"40%" },
    { topics: "Dress", money: "$3000 / $1000",width:"15%" },
    { topics: "Fun", money: "$1000 / $500",width:"55%" },
  ];
  return (
    <>
      <div class="container">
        <div class="row">
          {listOfBudget.map((x) => (
            <div class="col-6">
              <div class={styles.CardHolder}>
                <p class={styles.topics}>{x.topics}</p>
                <p class={styles.Money}>{x.money}</p>
                <div class={styles.progressBarHolder}>
                  <div class="progress">
                    <div
                     class="progress-bar progress-bar-striped progress-bar-animated"
                      style={{ width:`${x.width}` }}
                      role="progressbar"
                      aria-label="Segment one"
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div class="container mt-4 mb-3 ">
                  <AddExp
                    title={"Add Expenes"}
                    Heading={"New Expenes"}
                    target={"offcanvasExpense"}
                    addAbout={"Description"}
                    amount={"Amount"}
                    budgetSelector={true}
                    class={"btn btn-outline-primary ms-1"}
                  />
                  <button type="button" class="btn btn-outline-secondary ms-3 ">
                  <Link to="/viweExp"> View Expense</Link>
                   
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
