import { configureStore } from "@reduxjs/toolkit";
import budgetsReducer from '../features/budget/budgetsSlice';
import expensesReducer from '../features/expenses/expensesSlice';
import incomesReducer from '../features/incomes/incomesSlice';

const store = configureStore({
    reducer: {
        budgets: budgetsReducer,
        incomes: incomesReducer,
        expenses: expensesReducer
    }
});

export default store;
