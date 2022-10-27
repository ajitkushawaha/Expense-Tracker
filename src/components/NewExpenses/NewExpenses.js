import React from "react";

import ExpensesForm from "./ExpensesForm";
import './NewExpenses.css';

const NewExpenses = (props) =>{

    const saveExpensesDatahandler = 
      (enteredExpensesData) =>{
       

        const expensesData = {...enteredExpensesData,
             id: Math.random().toString}

             props.onAddExpenses(expensesData);

      console.log(expensesData); 
    };

    return (
        <div className="new-expenses">
            <ExpensesForm onSaveExpensesData =
            {saveExpensesDatahandler} />
        </div>
    );
}

export default NewExpenses;