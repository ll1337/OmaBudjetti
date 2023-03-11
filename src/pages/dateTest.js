import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';
import PrettyDate from '../components/prettyDate';

export default function DateTest( { navigation } ) {

    const [confirmedDate, setConfirmedDate] = useState(null);

    const handleDateConfirm = (date) => {
        console.log(confirmedDate);
        setConfirmedDate(date);
    };

    return(
            
        <StoreProvider store={store}>
            <View style={styles.container}>
                <Text style={{marginBottom: 40}}>Datepicker test zone</Text>
                <View style={{margin: 20}}></View>

                <PrettyDate onDateConfirm={handleDateConfirm}/>
                <Text>Selected date: {confirmedDate}</Text>

            </View>
        </StoreProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        alignItems: 'center',
    },
});