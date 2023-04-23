import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Text, ScrollView } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';
import { useDispatch } from 'react-redux';
import BottomNavBar from '../components/bottomNavBar';
import MonthRectangle from '../components/monthRectangle';
import PrettyNavigationButton from '../components/prettyNavigationButton';
import PrettySquareButton from '../components/prettySquareButton';
import PrettyCategoryCard from '../components/prettyCategoryCard';


export default function Edit( { navigation } ) {


    const activeBudget = store.getState('budgets').budgets.currentBudgetId.budgetId;
    console.log(activeBudget);
    var budgetName = "No budget selected";
    if ( activeBudget != undefined ) {
        budgetName = store.getState('budgets').budgets.byId[activeBudget].budgetName;

    }
    console.log(budgetName);

    return(
        <StoreProvider store={store}>
            <View style={styles.container}>    
                <View style={styles.header}>
                    <Text style={styles.headerText}>Eva - OmaBudjetti</Text>
                </View>           
                <View style={styles.rectangle}>
                    <Text style={styles.budgetNameText}>{budgetName}</Text>

                    <Text style={styles.welcomeText}>Muokkaa</Text>
                    <View style={styles.divider} />
                    <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', marginBottom: 10,}}>
                        <Text style={styles.budgetToEdit}>{budgetName}</Text>
                        <PrettySquareButton 
                                title="Muuta nimeä"
                                iconRight="file-edit-outline"
                        />
                    </View>
                    <View style={{marginRight: 200, marginBottom: 10}}>
                        <PrettySquareButton 
                            title="Poista budjetti"
                            red
                            iconRight="trash-can-outline"
                        />
                    </View>
                    <View style={styles.divider} />
                    <PrettyCategoryCard title="Asuminen" iconRight="home-outline"/>



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
    welcomeText: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 0,
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 30,
    },
    divider: {
        marginTop: 4,
        marginLeft: 25,
        marginRight: 25,
        borderColor: 'black',
        borderBottomWidth: 1,
    },
    budgetNameText: {
        alignSelf: 'center',
        color: '#17B5AD',
        fontSize: 15,
        marginTop: 5,
    },
    budgetToEdit: {
        marginTop: 10,
        marginLeft: 30,
        fontSize: 15,
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