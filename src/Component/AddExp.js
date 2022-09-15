import React from 'react'
import styles from '../styles/head.module.css'
export default function AddExp() {
  return (
 <>
  <button
       class="btn btn-outline-primary ms-1"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExpense"
            aria-controls="offcanvasRight"
          >
            Add Expense
          </button>

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasExpense"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
            <h2 class={styles.addHeading}>New Expense</h2>
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
                <label  class="form-label">Description</label>
                   <input  class="form-control"/>
               </div>

               <div class="mb-3">
                <label  class="form-label">Amount</label>
                   <input  class="form-control"/>
               </div>
               <div class="mb-3">
                {/* <label class="form-label">Budget</label> */}
                <select class="form-select" aria-label="Default select example">
                <option selected>Uncategories</option>
                 <option value="1">reson</option>
                 <option value="2">reson</option>
                </select>
               </div>
               <buuton class="btn btn-primary">Add</buuton>


                </from>
            </div>
          </div>
 </>
  )
}
