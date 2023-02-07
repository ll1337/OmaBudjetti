import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, View, Pressable } from "react-native";
import _ from 'lodash';

import { addExpense, incrementNumber } from "./budgetSlice";

export function Budget() {
    const dispatch = useDispatch();

    let numberSelector = useSelector((state) => state.budget.number);
    let expenseSelector = useSelector((state) => state.budget.expenses);

    const onAddExpenseClick = () => {
        console.log('adding an expense');
        dispatch(
            addExpense()
        )
    };

    const onIncrementNumberClick = () => {
        dispatch(
            incrementNumber()
        )
    };



    return (
        <View>
            <Pressable onPress={() => onIncrementNumberClick()} style={{ height: 50, backgroundColor: '#ccc' }}
            >
                <Text>Increment Number</Text>
            </Pressable>
            <Text>{numberSelector}</Text>
            <Pressable onPress={() => onAddExpenseClick()} style={{ height: 50, backgroundColor: '#ccc' }}
            >
                <Text>Add Expense</Text>
            </Pressable>
            {
                _.map(expenseSelector, (expense => {
                    return <Text key={expense}>{expense}</Text>
                }))
            }
        </View>
    );
}
