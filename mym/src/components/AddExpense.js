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
        console.log(this.state.expense)
        return (
            <form>
                <h3>Add Expense</h3>
                <div>
                    Date
                    Expense Name
                    Amount
                    Category
                </div>
                <div>
                    <input required type="date" onChange={this.onInputChange} name="date" value={this.state.expense.date}/>
                    <input required type="text" onChange={this.onInputChange} name="name" value={this.state.expense.name}/>
                    <input required type="number" onChange={this.onInputChange} name="amount" value={this.state.expense.amount}/>
                    <input required type="text" onChange={this.onInputChange} name="category" value={this.state.expense.category}/>
                </div>
                <button>Add expense</button>
            </form>
        )
    }
}

export default AddExpense;