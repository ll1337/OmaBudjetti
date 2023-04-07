import 'react-native-get-random-values';
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const budgetsSlice = createSlice({
    name: 'budgets',
    initialState: {},
    reducers: {
        addBudget: (state, action) => {

            const { budgetId, budgetName } = action.payload;
            
            const newBudget = {
                budgetName: budgetName,
                expenses: [],
                incomes: [],
            };
            state[budgetId] = newBudget;
        },
        currentBudget: (state, action) => {
            state['currentBudget'] = action.payload.budgetId;
            console.log(state);
        }
    }
});

export const { addBudget, currentBudget } = budgetsSlice.actions;

export default budgetsSlice.reducer;