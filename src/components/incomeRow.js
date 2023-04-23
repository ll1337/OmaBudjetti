import TrashIcon from "./trashIcon";
import DecimalInput from "./decimalInput";
import { View, StyleSheet } from 'react-native';
import {React, useState} from 'react';
import { Text } from '@rneui/themed';
import PrettyDatePicker from "./prettyDatePicker";
import { useDispatch, useSelector } from 'react-redux';
import SuccessfulNotification from './successfulNotification';
import { deleteIncome } from "../features/incomes/incomesSlice";

const IncomeRow = ({ incomeId }) => {

    const [pressed, setPressed] = useState(false);
    const [dateEdited, setDateEdited] = useState(false);
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
        setDateEdited(true);
        setTimeout(() => {setDateEdited(false)}, 800);
    }

    const handleDeleteIncome = () => {
        setPressed(true);
        setTimeout(() => {dispatch(deleteIncome(expenseId))}, 500);
    }

    return (
        <View style={styles.listContainer}>
            <Text style={styles.listText}>{incomeType}</Text>
            <TrashIcon handlePress={handleDeleteIncome} />
            {pressed && <SuccessfulNotification deleted={true} />}
            <Text style={styles.otherText}>/kk</Text>
            <DecimalInput handleAmountChange={handleAmountChange} id={incomeId}/>
            <PrettyDatePicker onDateConfirm={handleDateConfirm} />
            {dateEdited && <SuccessfulNotification edited={true} />}
        </View>

    );
};

export default IncomeRow;

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
