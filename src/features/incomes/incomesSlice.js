import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
    byId: {},
    allIds: [],
}

const incomesSlice = createSlice({
    name: 'incomes',
    initialState,
    reducers: {
        addIncome: (state, action) => {
            const newIncome = action.payload;
            if (!_.includes(state.allIds, newIncome.id)) {
                state.allIds.push(newIncome.id);
                state.byId[newIncome.id] = newIncome;
            }
        },
        deleteIncome: (state, action) => {
            const expenseId = action.payload;
            if (_.includes(state.allIds, expenseId)) {
                state.allIds = state.allIds.filter(id !== expenseId);
                delete state.byId[expenseId];
            }
        },
        editIncome: (state, action) => {
            const newIncome = action.payload;
            if (_.includes(state.allIds, newIncome.id)) {
                state.byId = newIncome;
            }
        }
    },
});

export const { addIncome, deleteIncome, editIncome } = incomesSlice.actions;

export default incomesSlice.reducer;
