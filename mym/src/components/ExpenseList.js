import React from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';

const ExpenseList = (props) => {
    console.log(props.user.userExpenses)
    return (
        <div>{props.user.userExpenses.map(expense => <Expense expense={expense} key={expense.expenseid}/>)}</div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {})(ExpenseList);