import TrashIcon from "./trashIcon";
import DecimalInput from "./decimalInput";
import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Text } from '@rneui/themed';
import PrettyDatePicker from "./prettyDatePicker";

const ListComponent = ({ expenseId }) => {
    const [confirmedDate, setConfirmedDate] = useState(null);

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
        <View style={styles.listContainer}>
            <Text style={styles.listText}>{expenseType}</Text>
            <TrashIcon handlePress={handleDeleteExpense} />
            <Text style={styles.otherText}>/kk</Text>
            <DecimalInput handleAmountChange={handleAmountChange} />
            <PrettyDatePicker onDateConfirm={handleDateConfirm} />
        </View>

    );
};

export default ListComponent;

const styles = StyleSheet.create({
    listContainer: {
        marginTop: -38,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
    },
    otherText: {
        height: 25,
        marginTop: 15,
        marginRight: 10,
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: 16,
    },
});
