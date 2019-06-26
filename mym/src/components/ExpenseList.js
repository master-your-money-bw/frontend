import React from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';

const ExpenseList = (props) => {
    return (
        <div>{props.expenses.reverse().map(expense => <Expense expense={expense} key={expense.expenseid}/>)}</div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps, {})(ExpenseList);