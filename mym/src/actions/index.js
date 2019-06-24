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

// create actions
export const login = user => dispatch => {
    dispatch({ type: LOGIN_START });
    axios.post("https://bw-money-backend.herokuapp.com/oauth/token", `grant_type=password&username=${user.username}&password=${user.password}`, {
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
    axiosWithAuth()
        .get("/users/currentuser")
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_USER_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_USER_DATA_FAIL, payload: err.response.error_description })
        })
}

export const updateProfile = (profileData) => dispatch => {
    dispatch({ type: UPDATE_PROFILE_START });
    axiosWithAuth()
        .put("/users/currentuser", profileData)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}