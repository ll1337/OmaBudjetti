import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import defaultExpenseCategories from '../../constants/defaultExpenseCategories.json';
import recurrenceTypes from '../../constants/recurrenceTypes';

const defaultExpenses = _.map(defaultExpenseCategories, (category) => {
    return {
        id: uuidv4(),
        category: category[0],
        type: category[1],
        amount: 0,
        date: null,
        recurrenceType: recurrenceTypes.Monthly,
        recurrenceMonths: []
    }
});

const initialState = {
    byId: _.keyBy(defaultExpenses, 'id'),
    allIds: _.map(defaultExpenses, expense => expense.id),
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
                state.allIds = _.filter(state.allIds, id => id !== expenseId);
                delete state.byId[expenseId];
            }
        },
        editExpense: (state, action) => {
            const newExpense = action.payload;
            if (_.includes(state.allIds, newExpense.id)) {
                state.byId[newExpense.id] = newExpense;
            }
        }
    },
});

export const { addExpense, deleteExpense, editExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
