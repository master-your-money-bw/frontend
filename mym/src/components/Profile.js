import React from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../actions';

class Profile extends React.Component {
    state = {
        isUpdating: false,
        updatedUser: {}
    }

    onToggleUpdate = () => {
        this.setState(prevState => ({ 
            isUpdating: !prevState.isUpdating,
            updatedUser: {
                ...this.props.user
            }
        }))
    }

    onInputChange = e => {
        this.setState({
            updatedUser: {
                ...this.state.updatedUser,
                [e.target.name]: e.target.value
            }
        })
    }

    onSubmitForm = e => {
        e.preventDefault();
        this.props.updateProfile(this.state.updatedUser)
        this.setState(prevState => ({ isUpdating: !prevState.isUpdating }))
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Your Account</span>
                    {this.state.isUpdating ? 
                        (<form onSubmit={this.onSubmitForm}>
                            <button>update</button>
                            <button onClick={this.onToggleUpdate}>cancel</button>
                            <p>Username: {this.props.user.username}</p>
                            <div className="input-field">
                                <label className="active" htmlFor="age">Age</label>
                                <input required type="number" onChange={this.onInputChange} name="age" value={this.state.updatedUser.age} id="age"/>
                            </div>
                            <div className="input-field">
                                <label className="active" htmlFor="education">Education</label>
                                <input required type="text" onChange={this.onInputChange} name="education" value={this.state.updatedUser.education} id="education"/>
                            </div>
                            <div className="input-field">
                                <label className="active" htmlFor="location">Location</label>
                                <input required type="text" onChange={this.onInputChange} name="location" value={this.state.updatedUser.location} id="location"/>
                            </div>
                            <div className="input-field">
                                <label className="active" htmlFor="income">Income</label>
                                <input required type="number" onChange={this.onInputChange} name="income" value={this.state.updatedUser.income} id="income"/>
                            </div>
                            <div className="input-field">
                                <label className="active" htmlFor="transportation">Transportation</label>
                                <input required type="number" onChange={this.onInputChange} name="transportation" value={this.state.updatedUser.transportation} id="transportation"/>
                            </div>
                            <div className="input-field">
                                <label className="active" htmlFor="food">Food</label>
                                <input required type="number" onChange={this.onInputChange} name="food" value={this.state.updatedUser.food} id="food"/>
                            </div>
                            <div className="input-field">
                                <label className="active" htmlFor="clothing">Clothing</label>
                                <input required type="number" onChange={this.onInputChange} name="clothing" value={this.state.updatedUser.clothing} id="clothing"/>
                            </div>
                            <div className="input-field">
                                <label className="active" htmlFor="bills">Bills</label>
                                <input required type="number" onChange={this.onInputChange} name="bills" value={this.state.updatedUser.bills} id="bills"/>
                            </div>
                            <div className="input-field">
                                <label className="active" htmlFor="housing">Housing</label>
                                <input required type="number" onChange={this.onInputChange} name="housing" value={this.state.updatedUser.housing} id="housing"/>
                            </div>
                        </form>) : 
                        (<div>
                            <button onClick={this.onToggleUpdate}>update</button>
                            <p>Username: {this.props.user.username}</p>
                            <p>Age: {this.props.user.age}</p>
                            <p>Education: {this.props.user.education}</p>
                            <p>Location: {this.props.user.location}</p>
                            <p>Income: ${this.props.user.income}</p>
                            <p>Transportation Costs: ${this.props.user.transportation}</p>
                            <p>Food Costs: ${this.props.user.food}</p>
                            <p>Clothing Costs: ${this.props.user.clothing}</p>
                            <p>Bills: ${this.props.user.bills}</p>
                            <p>Housing: ${this.props.user.housing}</p>
                        </div>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { updateProfile })(Profile);