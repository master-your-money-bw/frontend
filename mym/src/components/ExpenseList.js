import React from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';

const bold = {
    fontWeight: "bold"
}

const ExpenseList = (props) => {
    return (
        <ul className="collection">
            <li className="collection-item row">
                <div className="col s3" style={bold}>Expense</div>
                <div className="col s3" style={bold}>Amount</div>
                <div className="col s3" style={bold}>Category</div>
            </li>
            {props.expenses.reverse().map(expense => <Expense expense={expense} key={expense.expenseid}/>)}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps, {})(ExpenseList);