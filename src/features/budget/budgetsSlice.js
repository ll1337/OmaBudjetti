import { createSlice } from "@reduxjs/toolkit";
import { ADD_BUDGET, ADD_INCOME, ADD_EXPENSE, UPDATE_INCOME, UPDATE_EXPENSE } from '../constants/actionTypes.js';

export const budgetsSlice = createSlice({
    name: 'budgets',
    initialState: {
        budgets: [
            {
                id: 1,
                name: 'Budget 1',
                incomes: [
                    {
                        id: 1,
                        amount: 1000,
                        date: '2023-03-31'
                    },
                ],
                expenses: [
                    {
                        id: 1,
                        amount: 2000,
                        date: '2023-04-01'
                    },
                ],
            },
        ],
    },
    reducers: {
        addExpense: (state) => {
            console.log('state before', state);
            state.expenses.push(state.number);
            console.log('state after', state);
        },
        addIncome: (state, action) => {
            state.incomes.push(action.payload);
        },
        incrementNumber: (state) => {
            state.number += 1;
        }
    }
});

export const { addExpense, addIncome, incrementNumber } = budgetsSlice.actions;

export default budgetsSlice.reducer;