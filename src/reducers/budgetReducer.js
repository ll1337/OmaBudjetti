import { ADD_BUDGET, ADD_INCOME, ADD_EXPENSE, UPDATE_INCOME, UPDATE_EXPENSE } from '../constants/actionTypes.js';


const initialState = {
    budgets: []
}

const budgetReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_BUDGET':
        return {
        ...state,
        budgets: [...state.budgets, { name: action.payload }]
        }
    default:
        return state
    }
}

export default budgetReducer