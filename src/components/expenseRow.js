import { React, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TrashIcon from './trashIcon';
import DecimalInput from './decimalInput';
import { Text } from '@rneui/themed';
import PrettyDatePicker from './prettyDatePicker';
import eventNamesByType from '../constants/eventScreenNamesByType.json';
import { deleteExpense, editExpense } from '../features/expenses/expensesSlice';
import SuccessfulNotification from './successfulNotification';
import recurrenceTypes from '../constants/recurrenceTypes';
import CustomRecurrenceIcon from './customRecurrenceIcon';
import RecurrenceModal from './recurrenceModal';

const ExpenseRow = ({ expenseId }) => {

    const [dateEdited, setDateEdited] = useState(false);
    const [deletePressed, setDeletePressed] = useState(false);
    const [recurrencePressed, setRecurrencePressed] = useState(false);
    

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
        setDateEdited(true);
        setTimeout(() => {setDateEdited(false)}, 800);
    }

    const handleDeleteExpense = () => {
        setDeletePressed(true);
        setTimeout(() => {dispatch(deleteExpense(expenseId))}, 500);
    }

    const handleToggleRecurrence = () => {
        setRecurrencePressed(!recurrencePressed)
    }

    const handleMonthEdit = () => {
        console.log("Button pressed")
    }

    return (
        <View style={styles.row}>
            <Text style={styles.listText}>{expenseType}</Text>
            <View style={styles.listContainer}>
                <PrettyDatePicker onDateConfirm={handleDateConfirm} date={expense.date} />
                {dateEdited && <SuccessfulNotification edited={true} />}
                <DecimalInput handleAmountChange={handleAmountChange} id={expenseId} />
                {expense.recurrenceType == recurrenceTypes.Monthly && <Text style={styles.otherText}>/kk</Text>}
                {expense.recurrenceType != recurrenceTypes.Monthly && <CustomRecurrenceIcon handlePress={handleToggleRecurrence}/> }
                {recurrencePressed && <RecurrenceModal handleExit={handleToggleRecurrence} handleMonthEdit={handleMonthEdit} recurrence={expense.recurrenceMonths}/>}
                <TrashIcon handlePress={handleDeleteExpense} />
                {deletePressed && <SuccessfulNotification deleted={true} />}
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
        marginLeft: 10,
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
