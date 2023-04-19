import TrashIcon from "./trashIcon";
import DecimalInput from "./decimalInput";
import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Text } from '@rneui/themed';
import PrettyDatePicker from "./prettyDatePicker";

const ListComponent = () => {
    const [confirmedDate, setConfirmedDate] = useState(null);

    const handleDateConfirm = (date) => {
        console.log(confirmedDate);
        setConfirmedDate(date);
    };

    return(
        <View style={styles.listContainer}>
            <TrashIcon />
            <Text style={styles.otherText}>/kk</Text>
            <DecimalInput />    
            <PrettyDatePicker onDateConfirm={handleDateConfirm} />
        </View>

    )
}

export default ListComponent;

const styles = StyleSheet.create ({
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
})