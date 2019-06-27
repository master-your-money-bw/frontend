import React from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';

const ExpenseList = (props) => {
    return (
        <ul className="collection">{props.expenses.reverse().map(expense => <Expense expense={expense} key={expense.expenseid}/>)}</ul>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps, {})(ExpenseList);