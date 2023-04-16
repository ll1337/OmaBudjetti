import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Text, Icon } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, deleteExpense, editExpense } from '../features/expenses/expensesSlice';
import PrettyDatePicker from '../components/prettyDatePicker';
import expenseNamesByType from '../constants/expenseScreenNamesByType.json'

export default function ExpenseRow({ expenseId }) {

    const expense = useSelector(state => state.expenses.byId[expenseId]);
    const dispatch = useDispatch();

    const expenseType = expenseNamesByType[expense.type];

    const handleAmountChange = (changedAmount) => {
        const changedExpense = {
            ...expense,
            amount: changedAmount
        };
        dispatch(editExpense(changedExpense));
    }

    const handleDateChange = (changedDate) => {
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
        <View style={styles.listElem}>
            <Text style={styles.listText}>{expenseType}</Text>
            <View style={styles.listContainer}>
                <Icon
                    name='trash-can-outline'
                    type="material-community"
                    iconColor={'#000000'}
                    size={30}
                    onPress={handleDeleteExpense} />
                <Text style={styles.otherText}>/kk</Text>
                <TextInput style={styles.input} placeholder='000,00' onChangeText={handleAmountChange} />
                <PrettyDatePicker onDateConfirm={handleDateChange} date={expense.date} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    listElem: {
        marginRight: 23,
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
    otherText: {
        marginTop: 15,
        marginRight: 10,
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: 16,
    },
    input: {
        textAlign: 'center',
        borderWidth: 1,
        width: 60,
        opacity: 0.5,
        marginLeft: 10,
        marginRight: 10,
        borderStyle: 'dashed',
    },
    listContainer: {
        marginTop: -32,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',

    }
});
