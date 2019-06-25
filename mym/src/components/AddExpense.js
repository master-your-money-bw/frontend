import React from 'react';

class AddExpense extends React.Component {
    state = {
        expense: {
            date: '',
            name: '',
            amount: '',
            category: ''
        }
    }

    onInputChange = e => {
        this.setState({
            expense: {
                ...this.state.expense,
                [e.target.name]: e.target.value
            }
        })
    }

    onSubmitForm = e => {
        e.preventDefault();
        // add to backend data
        // exit out of modal
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <form>
                        <h3>Add Expense</h3>
                        <div>
                            <div className="input-field">
                                <label className="active" htmlFor="date">Date</label>
                                <input required type="date" onChange={this.onInputChange} name="date" value={this.state.expense.date} id="date"/>
                            </div>
                            <div className="input-field">
                                <label className="active" htmlFor="name">Name</label>
                                <input required type="text" onChange={this.onInputChange} name="name" value={this.state.expense.name} id="name"/>
                            </div>
                            <div className="input-field">
                                <label className="active" htmlFor="amount">Amount</label>
                                <input required type="number" onChange={this.onInputChange} name="amount" value={this.state.expense.amount} id="amount"/>
                            </div>
                            <div className="input-field">
                                <label className="active" htmlFor="category">Category</label>
                                <input required type="text" onChange={this.onInputChange} name="category" value={this.state.expense.category} id="category"/>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light">Add Expense
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddExpense;