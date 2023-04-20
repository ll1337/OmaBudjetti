import TrashIcon from "./trashIcon";
import DecimalInput from "./decimalInput";
import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Text } from '@rneui/themed';
import PrettyDatePicker from "./prettyDatePicker";

const ListComponent = ({ incomeId }) => {

    const income = useSelector(state => state.incomes.byId[incomeId]);
    const dispatch = useDispatch();

    const incomeType = incomeNamesByType[income.type];

    const handleAmountChange = (changedAmount) => {
        const changedIncome = {
            ...income,
            amount: changedAmount
        };
        dispatch(editIncome(changedIncome));
    }

    const handleDateConfirm = (changedDate) => {
        const changedIncome = {
            ...income,
            date: changedDate
        };
        dispatch(editIncome(changedIncome));
    }

    const handleDeleteIncome = () => {
        dispatch(deleteIncome(incomeId));
    }

    return (
        <View style={styles.listContainer}>
            <Text style={styles.listText}>{incomeType}</Text>
            <TrashIcon handlePress={handleDeleteIncome} />
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
