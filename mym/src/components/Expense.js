import React from 'react';
import { connect } from 'react-redux';

class Expense extends React.Component {
    state = {
        newExpense: {
            expensename: this.props.expense.expensename,
            category: this.props.expense.category,
            amount: this.props.expense.amount
        },
        updating: false
    }

    toggleUpdate = () => {
        this.setState(prevState => ({ updating: !prevState.updating }))
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="row">
                    {
                        <div>
                            <div className="input-field">
                                <label className="active" htmlFor="date">Date</label>
                                <input required type="date" onChange={this.onInputChange} name="date" value={this.state.newExpense.expensename} id="date"/>
                            </div>
                            <div className="input-field">
                                <label className="active" htmlFor="date">Date</label>
                                <input required type="date" onChange={this.onInputChange} name="date" value={this.state.newExpense.category} id="date"/>
                            </div>
                            <div className="input-field">
                                <label className="active" htmlFor="date">Date</label>
                                <input required type="date" onChange={this.onInputChange} name="date" value={this.state.newExpense.amount} id="date"/>
                            </div>
                        </div>
                    }
                        <div className="col">
                            <p>Name: {this.props.expense.expensename}</p>
                            <p>Category: {this.props.expense.category}</p>
                            <p>Amount: {this.props.expense.amount}</p>
                        </div>
                        <div className="col">
                            <button>update</button>
                        </div>
                        <div className="col">
                            <button>delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {})(Expense);