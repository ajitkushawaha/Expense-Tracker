import React, {useState} from  'react'

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import  Card from '../UI/Card';

const ExpenseItem= (props)=> {
  
  return (
    <Card className="expence-item">
        <ExpenseDate date={props.date}/>
      <div className="expence-item__decription">
         <h2>{props.title}</h2>
        <div className="expence-item__price">&#x20B9;{props.amount}</div>
      </div>
        
    </Card>
  );
}

export default ExpenseItem;
