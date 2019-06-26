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

    onInputChange = e => {
        this.setState({
            newExpense: {
                ...this.state.newExpense,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="row">
                    {this.state.updating ? 
                        (<div>
                            <div className="input-field">
                                <label className="active" htmlFor="expensename">Expense Name</label>
                                <input required type="text" onChange={this.onInputChange} name="expensename" value={this.state.newExpense.expensename} id="expensename"/>
                            </div>
                            <div className="input-field">
                                <label className="active" htmlFor="category">Category</label>
                                <input required type="text" onChange={this.onInputChange} name="category" value={this.state.newExpense.category} id="category"/>
                            </div>
                            <div className="input-field">
                                <label className="active" htmlFor="amount">Amount</label>
                                <input required type="number" onChange={this.onInputChange} name="amount" value={this.state.newExpense.amount} id="amount"/>
                            </div>
                            <button >update</button>
                            <button onClick={this.toggleUpdate}>cancel</button>
                        </div>) : 
                        (<div>
                            <div className="col">
                                <p>Name: {this.props.expense.expensename}</p>
                                <p>Category: {this.props.expense.category}</p>
                                <p>Amount: {this.props.expense.amount}</p>
                            </div>
                            <div className="col">
                                <button onClick={this.toggleUpdate}>update</button>
                            </div>
                            <div className="col">
                                <button>delete</button>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {})(Expense);