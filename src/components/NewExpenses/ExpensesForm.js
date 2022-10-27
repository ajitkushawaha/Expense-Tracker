import React, {useState} from "react";

import './ExpensesForm.css';
const ExpemsesForm = (props) =>{

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)

    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)

    };

    const submitHandler = (event) =>{
        event.preventDefault();

        const expensesData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpensesData(expensesData);

        console.log(expensesData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form  onSubmit= {submitHandler}>
            <div className="new-expenses__controls">
                <div className="new-expenses__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" value = {enteredTitle}  onChange={titleChangeHandler}/>
                </div>
                <div className="new-expenses__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value = {enteredAmount}  onChange={amountChangeHandler} />
                </div>
                <div className="new-expenses__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" value = {enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expenses__actions">
                 <button type="submit">Add Expenses</button>
            </div>
        </form>

    );
}

export default ExpemsesForm