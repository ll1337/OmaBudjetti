import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
    byId: {},
    allIds: [],
}

const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            const newExpense = action.payload;
            if (!_.includes(state.allIds, newExpense.id)) {
                state.allIds.push(newExpense.id);
                state.byId[newExpense.id] = newExpense;
            }
        },
        deleteExpense: (state, action) => {
            const expenseId = action.payload;
            if (_.includes(state.allIds, expenseId)) {
                state.allIds = state.allIds.filter(id !== expenseId);
                delete state.byId[expenseId];
            }
        },
        editExpense: (state, action) => {
            const newExpense = action.payload;
            if (_.includes(state.allIds, newExpense.id)) {
                state.byId = newExpense;
            }
        }
    },
});

export const { addExpense, deleteExpense, editExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
