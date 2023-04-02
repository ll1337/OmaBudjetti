import { createSlice } from '@reduxjs/toolkit';

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: [],
    reducers: {
        addExpense: (state, action) => {
        const { budgetId, name, date, amount } = action.payload;
        const index = state.findIndex((expense) => expense.budgetId === budgetId);
        if (index !== -1) {
            state[index].expenses.push({ name, date, amount });
        }
        },
    },
});

export const { addExpense } = expensesSlice.actions;

export default expensesSlice.reducer;