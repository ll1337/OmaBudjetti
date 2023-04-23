import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TrashIcon from './trashIcon';
import DecimalInput from './decimalInput';
import { Text } from '@rneui/themed';
import PrettyDatePicker from './prettyDatePicker';
import eventNamesByType from '../constants/eventScreenNamesByType.json';
import { deleteExpense, editExpense } from '../features/expenses/expensesSlice';

const ExpenseRow = ({ expenseId }) => {

    const expense = useSelector(state => state.expenses.byId[expenseId]);
    const dispatch = useDispatch();

    const expenseType = eventNamesByType[expense.type];

    const handleAmountChange = (changedAmount) => {
        const changedExpense = {
            ...expense,
            amount: changedAmount
        };
        dispatch(editExpense(changedExpense));
    }

    const handleDateConfirm = (changedDate) => {
        const changedExpense = {
            ...expense,
            date: changedDate
        };
        dispatch(editExpense(changedExpense));
    }

    const handleDeleteExpense = () => {
        dispatch(deleteExpense(expenseId));
    }

    return (
        <View style={styles.row}>
            <Text style={styles.listText}>{expenseType}</Text>
            <View style={styles.listContainer}>
                <PrettyDatePicker onDateConfirm={handleDateConfirm} date={expense.date} />
                <DecimalInput handleAmountChange={handleAmountChange} expenseId={expenseId} />
                <Text style={styles.otherText}>/kk</Text>
                <TrashIcon handlePress={handleDeleteExpense} />
            </View>
        </View>

    );
};

export default ExpenseRow;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginRight: 20
    },
    otherText: {
        height: 25,
        marginTop: 15,
        marginRight: 10,
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: 16,
    },
    listText: {
        marginTop: 15,
        marginLeft: 30,
        marginRight: 10,
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
