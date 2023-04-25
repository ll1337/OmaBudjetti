import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Text, ScrollView } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';
import { useDispatch } from 'react-redux';
import BottomNavBar from '../components/bottomNavBar';
import MonthRectangle from '../components/monthRectangle';

// Total amount of months to render
const rectanglesAmt = 24;

// Should be pulled from the store i.e where the budgeting begins
// m/y
const startDate = '2023-01';

export default function Month( { navigation } ) {

    //var activeBudget = store.getState('budgets')['budgets']['currentBudget']
    // Grab the UUID of current active budget, check if such exists.
    const activeBudget = store.getState('budgets').budgets.currentBudgetId.budgetId;
    let budgetName = "No budget selected";
    if ( activeBudget !== undefined ) {
        budgetName = store.getState('budgets').budgets.byId[activeBudget].budgetName;
    }

    // Array containing all the needed month rectangles
    const monthRectangles = [];

    //const [cumulativeAmt, setCumulativeAmt] = useState(0);


    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');

    var [year, month] = startDate.split('-');

    for (let i = 0; i < rectanglesAmt; i++) {

        monthRectangles.push(< MonthRectangle 
            key={[year, month]}
            month={month}
            year={year} 
            coCumulative={true}
            pastMonth={currentYear > year || (currentYear == year && currentMonth > month)}
            monthView={true}
            navigation={navigation}
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
                    <Text style={styles.budgetNameText}>{budgetName}</Text>
                    {/* Get the current active month here! */}

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