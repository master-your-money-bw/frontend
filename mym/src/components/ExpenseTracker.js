import React from 'react';
import ExpenseList from './ExpenseList';
import AddExpense from './AddExpense';

const ExpenseTracker = () => {
    return (
        <div>
            <AddExpense />
            <ExpenseList />
        </div>
    )
}

export default ExpenseTracker;