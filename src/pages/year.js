import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, TextInput } from 'react-native';
import { Text, IconButton } from "react-native-paper";
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';
import { useDispatch } from 'react-redux';
import PrettyButton from '../components/prettyButton';
import PrettyNavigationButton from '../components/prettyNavigationButton';
import BottomNavBar from '../components/bottomNavBar';
import MonthRectangle from '../components/monthRectangle';


export default function Year( { navigation } ) {

    


    return(
        <StoreProvider store={store}>
            <View style={styles.container}>    
                <View style={styles.header}>
                    <Text style={styles.headerText}>Eva - OmaBudjetti</Text>
                </View>           
                <View style={styles.rectangle}>
                    <Text style={styles.budgetNameText}>Budjetin nimi</Text>
                <MonthRectangle positive='false'>

                </MonthRectangle>
                <MonthRectangle>

                </MonthRectangle>
                <MonthRectangle>

                </MonthRectangle>

                </View>

            </View>

            <BottomNavBar>

            </BottomNavBar>

        </StoreProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#17B5AD',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        overflow: 'hidden',
        marginTop: StatusBar.currentHeight || 0,
    },
    header: {
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 25,
    },
    budgetNameText: {
        fontSize: 15,
        marginLeft: 15,
        marginTop: 10,
    },
    rectangle: {
        position: 'absolute',
        marginTop: 60,
        left: 0,
        right: 0,
        height: 800,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,        
    },
});