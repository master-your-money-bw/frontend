import React from 'react';
import ExpenseList from './ExpenseList';
import AddExpense from './AddExpense';
import { Link } from 'react-router-dom';

const ExpenseTracker = () => {
    return (
        <div>
            <Link to="/dashboard">
                <button className="btn waves-effect waves-light">Back to Overview
                    <i className="material-icons left">arrow_back</i>
                </button>
            </Link>
            <AddExpense />
            <ExpenseList />
        </div>
    )
}

export default ExpenseTracker;