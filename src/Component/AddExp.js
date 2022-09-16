import React from 'react'
import styles from '../styles/head.module.css'
export default function AddExp(props) {
  return (
 <>
  <button
       class={props.class}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target={ "#" +props.target}
            aria-controls="offcanvasRight"
          >
            {props.title}
          </button>

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id={props.target}
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
            <h2 class={styles.addHeading}>{props.Heading}</h2>
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
                <label  class="form-label">{props.addAbout}</label>
                   <input  class="form-control"/>
               </div>

               <div class="mb-3">
                <label  class="form-label">{props.amount}</label>
                   <input  class="form-control"/>
               </div>
               {props.budgetSelector===true&&
               
                <div class="mb-3">
              
                <select class="form-select" aria-label="Default select example">
                <option selected>Uncategories</option>
                 <option value="1">reson</option>
                 <option value="2">reson</option>
                </select>
               </div>
               
               }
              
               <button class="btn btn-primary">Add</button>


                </from>
            </div>
          </div>
 </>
  )
}
