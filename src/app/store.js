import { configureStore } from "@reduxjs/toolkit";
import budgetsReducer from '../features/budget/budgetsSlice'
import expensesReducer from '../features/budget/expensesSlice'
import incomesReducer from '../features/budget/incomesSlice'

const store = configureStore({
    reducer: {
        budgets: budgetsReducer,
    }
});

export default store;