import { createSlice } from '@reduxjs/toolkit';

const incomesSlice = createSlice({
    name: 'incomes',
    initialState: [],
    reducers: {
        addIncome: (state, action) => {
        const { budgetId, name, date, amount } = action.payload;
        const index = state.findIndex((income) => income.budgetId === budgetId);
        if (index !== -1) {
            state[index].incomes.push({ name, date, amount });
        }
        },
    },
});

export const { addIncome } = incomesSlice.actions;

export default incomesSlice.reducer;