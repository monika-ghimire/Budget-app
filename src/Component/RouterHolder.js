import React from "react";
import BudgetPage from "../Pages/BudgetPage";
import ViweExp from "./ViweExp";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";




export default function RouterHolder() {
  return (
    <>
   <BrowserRouter>
    <Routes>
    <Route path="" element={<BudgetPage/>}>
      </Route>
      <Route path="/ViweExp" element={<ViweExp/>}>
      </Route>
    </Routes>
  </BrowserRouter>
    
    </>
  )
}
