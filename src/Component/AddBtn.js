import React from 'react'
import styles from '../styles/head.module.css'

export default function AddBtn() {
 
  return (
    <>
     <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBudget"
            aria-controls="offcanvasRight"
          >
            Add Budgets
          </button>
         

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasBudget"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
            
                <h2 class={styles.addHeading}>New Budget</h2>
               
                <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
          
              
             
            </div>
            <hr/>
            <div class="offcanvas-body">
            <from class="container">
                <div class="mb-3">
                <label  class="form-label">Name</label>
                   <input  class="form-control" id='ExpenesName'/>
               </div>

               <div class="mb-3">
                <label  class="form-label">Maximum Spending</label>
                   <input  class="form-control" id='MaximumSpending'/>
               </div>
               <buuton class="btn btn-primary" >Add</buuton>


                </from>
            </div>
          </div>
    </>
  )
}
