import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Text, ScrollView } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';
import { useDispatch } from 'react-redux';
import BottomNavBar from '../components/bottomNavBar';
import MonthRectangle from '../components/monthRectangle';
import PrettyNavigationButton from '../components/prettyNavigationButton';


export default function Edit( { navigation } ) {

    return(
        <StoreProvider store={store}>
            <View style={styles.container}>    
                <View style={styles.header}>
                    <Text style={styles.headerText}>Eva - OmaBudjetti</Text>
                </View>           
                <View style={styles.rectangle}>
                    <Text style={styles.budgetNameText}>CODE CUCKOOS BUDJETTI</Text>
                    {/* Get the current active month here! */}

                    <Text style={styles.welcomeText}>Muokkaa</Text>
                    <View style={styles.divider} />
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text style={styles.budgetToEdit}>CODE CUCKOOS BUDJETTI</Text>
                        <PrettyNavigationButton 
                                title="Muuta nimeä"
                                disabledLeft
                                iconRight="file-edit-outline"
                        />
                    </View>
                    <PrettyNavigationButton 
                        title="Poista budjetti"
                        disabledLeft
                        iconRight="file-edit-outline"
                        
                    />
                    <View style={styles.divider} />



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
        marginLeft: 30,
        marginTop: 15,
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