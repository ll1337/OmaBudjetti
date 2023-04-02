import { ADD_BUDGET, ADD_INCOME, ADD_EXPENSE, UPDATE_INCOME, UPDATE_EXPENSE } from '../constants/actionTypes';

export const addBudget = (name) => {
    return {
        type: ADD_BUDGET,
        payload: name
    }
}