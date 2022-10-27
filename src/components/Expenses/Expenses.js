import React from 'react'

import './Expenses.css';
import ExpenseItem from './ExpenseItem';

import Card from '../UI/Card';

const Expenses = (props) => {

    return (
        <Card className='expenses'>
         {
            props.item.map(
               expenses => (
                  <ExpenseItem
                  date = {expenses.date} 
                  title = {expenses.title} 
                  amount = {expenses.amount}/>

                  )
            )
         }
        </Card>

    );


}

export default Expenses;