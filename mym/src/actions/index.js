import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

// set action types
export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"

export const FETCH_USER_DATA_START = 'FETCH_USER_DATA_START';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAIL = 'FETCH_USER_DATA_FAIL';

export const UPDATE_PROFILE_START = 'UPDATE_PROFILE_START';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAIL = 'UPDATE_PROFILE_FAIL';

export const CREATE_USER_START = 'CREATE_USER_START';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';

export const ADD_EXPENSE_START = 'ADD_EXPENSE_START';
export const ADD_EXPENSE_SUCCESS = 'ADD_EXPENSE_SUCCESS';
export const ADD_EXPENSE_FAIL = 'ADD_EXPENSE_FAIL';

export const UPDATE_EXPENSE_START = 'UPDATE_EXPENSE_START';
export const UPDATE_EXPENSE_SUCCESS = 'UPDATE_EXPENSE_SUCCESS';
export const UPDATE_EXPENSE_FAIL = 'UPDATE_EXPENSE_FAIL';

export const DELETE_EXPENSE_START = 'DELETE_EXPENSE_START';
export const DELETE_EXPENSE_SUCCESS = 'DELETE_EXPENSE_SUCCESS';
export const DELETE_EXPENSE_FAIL = 'DELETE_EXPENSE_FAIL';

export const GET_USER_EXPENSES_START = 'GET_USER_EXPENSES_START';
export const GET_USER_EXPENSES_SUCCESS = 'GET_USER_EXPENSES_SUCCESS';
export const GET_USER_EXPENSES_FAIL = 'GET_USER_EXPENSES_FAIL';

// create actions
export const login = user => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post("https://bw-money-backend.herokuapp.com/oauth/token", `grant_type=password&username=${user.username}&password=${user.password}`, {
        headers: {
            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(res => {
            localStorage.setItem("token", res.data.access_token)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.access_token })
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAIL, payload: err.response.data.error_description })
        })
}

export const fetchUser = token => dispatch => {
    dispatch({ type: FETCH_USER_DATA_START });
    return axiosWithAuth()
        .get("/users/currentuser")
        .then(res => {
            dispatch({ type: FETCH_USER_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_USER_DATA_FAIL, payload: err.response.error_description })
        })
}

export const updateProfile = profile => dispatch => {
    dispatch({ type: UPDATE_PROFILE_START });
    axiosWithAuth()
        .put("/users/currentuser", profile)
        .then(res => {
            dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: UPDATE_PROFILE_FAIL, payload: err.response.data.error_description })
        })
}

export const createUser = user => dispatch => {
    dispatch({ type: CREATE_USER_START });
    return axios.post("https://bw-money-backend.herokuapp.com/createnewuser", user)
        .then(res => dispatch({ type: CREATE_USER_START }))
        .catch(err => {
            dispatch({ type: CREATE_USER_FAIL, payload: "User cannot be created. Please try another Username." })
        })
}

export const getUserExpenses = () => dispatch => {
    dispatch({ type: GET_USER_EXPENSES_START });
    return axiosWithAuth()
        .get("/expenses/all")
        .then(res =>{
            dispatch({ type: GET_USER_EXPENSES_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: GET_USER_EXPENSES_FAIL, payload: err}))
}

export const addExpense = expense => dispatch => {
    dispatch({ type: ADD_EXPENSE_START })
    return axiosWithAuth()
        .post("/expenses/new", expense)
        .then(res => {
            dispatch({ type: ADD_EXPENSE_SUCCESS })
        })
        .catch(err => {
            dispatch({ type: ADD_EXPENSE_FAIL, payload: err})
        })
}

export const updateExpense = expense => dispatch => {
    console.log(expense)
    dispatch({ type: UPDATE_EXPENSE_START })
    return axiosWithAuth()
        .put(`/expenses/update/${expense.id}`, expense)
        .then(res => {
            dispatch({ type: ADD_EXPENSE_SUCCESS })
        })
        .catch(err => {
            dispatch({ type: ADD_EXPENSE_FAIL, payload: err})
        })
}

export const deleteExpense = expense => dispatch => {
    console.log(expense)
    dispatch({ type: DELETE_EXPENSE_START })
    return axiosWithAuth()
        .delete(`/expenses/delete/${expense.expenseid}`)
        .then(res => {
            dispatch({ type: ADD_EXPENSE_SUCCESS })
        })
        .catch(err => {
            dispatch({ type: ADD_EXPENSE_FAIL, payload: err})
        })
}