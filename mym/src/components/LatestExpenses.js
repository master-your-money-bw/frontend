import React from 'react';
import { connect } from 'react-redux';
import { getUserExpenses } from '../actions';
import Expense from './Expense';

class LatestExpenses extends React.Component {
    componentDidMount() {
        this.props.getUserExpenses()
    }

    render() {
        return (
            <div>
                Last 5 Expenses
                {this.props.expenses.reverse().slice(0, 5).map(expense => <Expense expense={expense} key={expense.expenseid} hideButton/>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps, { getUserExpenses })(LatestExpenses);