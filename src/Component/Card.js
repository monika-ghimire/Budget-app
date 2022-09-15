import React  from 'react';
import styles from "../styles/head.module.css";
import AddExp from "./AddExp";


export default function Card() {
  
    let listOfBudget=[
        {topics:"Food", money:"$400 / $200"},
        {topics:"Movies", money:"$40 / $00"},
        {topics:"Dress", money:"$3000 / $1000"},
        {topics:"Fun", money:"$1000 / $500"}
        
      ]
    return (
        <>
          <div class="container">
            <div class="row">
            { listOfBudget.map((x)=>(
              <div class="col-6">
           
                <div class={styles.CardHolder}>
                <p class={styles.topics}>{x.topics}</p>
                  <p class={styles.Money}>{x.money}</p>
                  <div class={styles.progressBarHolder}>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      style={{ width: "15%" }}
                      role="progressbar"
                      aria-label="Segment one"
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  </div>
                 
                  <div class="container mt-4 mb-3 " >

                  <AddExp/>
                  <button  type="button" class="btn btn-outline-secondary ms-3 ">
                    View Expense
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
  

