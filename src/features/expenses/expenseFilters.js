import _ from 'lodash';

export const getExpensesByCategory = (expenses, category) => {
    return _.filter(expenses, { category });
};

export const getExpenseIdsByCategory = (expenses, category) => {
    return _.map(getExpensesByCategory(expenses, category), expense => expense.id);
};
