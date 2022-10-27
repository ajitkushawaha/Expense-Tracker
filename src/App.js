import React, {useState, useEffect} from 'react'

import NewExpenses from './components/NewExpenses/NewExpenses'
import Expenses from './components/Expenses/Expenses';

let Dummy__expenses = [];
 
const App = () => {

   const [expenses, setExpenses] = useState(Dummy__expenses);

   // useEffect( ()=> {

   //    fetch("https://localhost/sample/api/read.php").then(
   //       response => {
   //          return response.json();
   //       }
   //    ).than(
   //       data => {
   //          console.log(data);
   //          setExpenses(data);
   //       }
   //    );

   // },[])

   const addExpensesHandler = (expense) =>{
       const updateExpenses = [expense, ...expenses];
       setExpenses(updateExpenses);
   };
   
    return(
       <div>
         <NewExpenses onAddExpenses = {addExpensesHandler}/>
         <Expenses item = {expenses}/> 
       </div>
    ); 
}


export default App;