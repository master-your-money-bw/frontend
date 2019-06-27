import React from 'react';
import ExpenseList from './ExpenseList';
import AddExpense from './AddExpense';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserExpenses } from '../actions';

const margin = {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px"
}
class ExpenseTracker extends React.Component {
    componentDidMount() {
        this.props.getUserExpenses()
    }

    render() {
        return (
            <div>
                <Link to="/dashboard">
                    <button className="btn waves-effect waves-light" style={margin}>Back to Overview
                        <i className="material-icons left">arrow_back</i>
                    </button>
                </Link>
                <AddExpense />
                <ExpenseList />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps, { getUserExpenses })(ExpenseTracker);