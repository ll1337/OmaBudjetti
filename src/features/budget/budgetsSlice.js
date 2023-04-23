import _ from 'lodash';
import 'react-native-get-random-values';
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    byId: {},
    allIds: [],
    currentBudgetId: ''
}

export const budgetsSlice = createSlice({
    name: 'budgets',
    initialState,
    reducers: {
        addBudget: (state, action) => {
            const { budgetId, budgetName } = action.payload;
            const newBudget = {
                budgetName: budgetName,
                expenseIds: [],
                incomeIds: [],
            };
            state.byId[budgetId] = newBudget;
            state.allIds.push(budgetId);
        },
        deleteBudget: (state, action) => {
            const budgetId = action.payload;

            if (_.includes(state.allIds, budgetId)) {
                state.allIds = state.allIds.filter(id !== budgetId);
                delete state.byId[budgetId]
            }
        },
        setCurrentBudget: (state, action) => {
            state['currentBudgetId'] = action.payload;
        }
    }
});

export const { addBudget, deleteBudget, setCurrentBudget } = budgetsSlice.actions;

export default budgetsSlice.reducer;
