import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Text, ScrollView } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';
import { useDispatch } from 'react-redux';
import BottomNavBar from '../components/bottomNavBar';
import MonthRectangle from '../components/monthRectangle';
import { RefreshControl } from 'react-native-web';


// Total amount of months to render
const rectanglesAmt = 24;

// Should be pulled from the store i.e where the budgeting begins
// m/y
const startDate = '2023-01';

export default function Year( { navigation } ) {

    // Array containing all the needed month rectangles
    const monthRectangles = [];

    var cumulativeAmt = 0;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');

    var [year, month] = startDate.split('-');

    for (let i = 0; i < rectanglesAmt; i++) {

        console.log(currentYear == year && currentMonth > month);

        // passed months are greyed
        const pastTwo = i < 2;

        monthRectangles.push(< MonthRectangle 
            month={month}
            year={year} 
            pastTwo={currentYear > year || (currentYear == year && currentMonth > month)}
                />)

        
        if (month === 12) {
            year++;
            month=1;
        }
        else {
            month++;
        }

    }


    return(
        <StoreProvider store={store}>
            <View style={styles.container}>    
                <View style={styles.header}>
                    <Text style={styles.headerText}>Eva - OmaBudjetti</Text>
                </View>           
                <View style={styles.rectangle}>
                    <Text style={styles.budgetNameText}>Budjetin nimi</Text>

                    <ScrollView>
                        {monthRectangles}
                    </ScrollView>


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
