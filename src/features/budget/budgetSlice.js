import { createSlice } from "@reduxjs/toolkit";

export const budgetSlice = createSlice({
    name: 'budget',
    initialState: {
        expenses: [100, 200],
        incomes: [],
        number: 0
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

export const { addExpense, addIncome, incrementNumber } = budgetSlice.actions;

export default budgetSlice.reducer;

