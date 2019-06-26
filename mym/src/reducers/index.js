// import actions
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FETCH_USER_DATA_START,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAIL,
  UPDATE_PROFILE_START,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  ADD_EXPENSE_START,
  ADD_EXPENSE_SUCCESS,
  ADD_EXPENSE_FAIL,
  UPDATE_EXPENSE_START,
  UPDATE_EXPENSE_SUCCESS,
  UPDATE_EXPENSE_FAIL,
  DELETE_EXPENSE_START,
  DELETE_EXPENSE_SUCCESS,
  DELETE_EXPENSE_FAIL,
  GET_USER_EXPENSES_START,
  GET_USER_EXPENSES_SUCCESS,
  GET_USER_EXPENSES_FAIL
} from "../actions";

const initializeState = {
  user: "",
  logginIn: false,
  loggedIn: false,
  fetchingProfile: false,
  updatingProfile: false,
  token: "",
  creatingUser: false,
  getUserExpenses: false,
  expenses: [],
  updatingUserExpenses: false,
  addingUserExpenses: false
};

export default function(state = initializeState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: "",
        loggedIn: true,
        token: action.payload
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case FETCH_USER_DATA_START:
      return {
        ...state,
        fetchingProfile: true,
        error: ""
      };
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        fetchingProfile: false,
        error: "",
        user: action.payload
      };
    case FETCH_USER_DATA_FAIL:
      return {
        ...state,
        fetchingProfile: false,
        error: action.payload
      };
    case UPDATE_PROFILE_START:
      return {
        ...state,
        updatingProfile: true,
        error: ""
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        updatingProfile: false,
        error: "",
        user: action.payload
      };
    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        updatingProfile: false,
        error: action.payload
      };
    case CREATE_USER_START:
      return {
        ...state,
        creatingUser: true,
        error: ""
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        creatingUser: false,
        error: ""
      };
    case CREATE_USER_FAIL:
      return {
        ...state,
        creatingUser: false,
        error: action.payload
      };
    case GET_USER_EXPENSES_START:
      return {
        ...state,
        getUserExpenses: true,
        error: ""
      };
    case GET_USER_EXPENSES_SUCCESS:
      return {
        ...state,
        getUserExpenses: false,
        expenses: action.payload,
        error: ""
      };
    case GET_USER_EXPENSES_FAIL:
      return {
        ...state,
        getUserExpenses: false,
        error: action.payload
      };
    case UPDATE_EXPENSE_START:
      return {
        ...state,
        error: "",
        updatingUserExpenses: true
      };
    case UPDATE_EXPENSE_SUCCESS:
      return {
        ...state,
        error: "",
        updatingUserExpenses: false
      };
    case UPDATE_EXPENSE_FAIL:
      return {
        ...state,
        error: action.payload,
        updatingUserExpenses: false
      };
    case ADD_EXPENSE_START:
      return {
        ...state,
        error: "",
        addingUserExpenses: true
      };
    case ADD_EXPENSE_SUCCESS:
      return {
        ...state,
        error: "",
        addingUserExpenses: false
      };
    case ADD_EXPENSE_FAIL:
      return {
        ...state,
        error: action.payload,
        addingUserExpenses: false
      };
    default:
      return state;
  }
}
