import React from 'react';
import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';
import { Provider as StoreProvider, useSelector } from 'react-redux';
import { Text } from '@rneui/themed';
import _ from 'lodash';
import store from '../app/store';
import PrettyNavigationButton from '../components/prettyNavigationButton';
import PrettyDropdownButton from '../components/prettyDropdownButton';
import BottomNavBar from '../components/bottomNavBar';
import ExpenseRow from '../components/expenseRow';
import ProgressBar from '../components/progressBar';
import expenseCategories from '../constants/expenseCategories.json';
import { getExpenseIdsByCategory } from '../features/expenses/expenseFilters';

export default function Loans({ navigation }) {

    const expenses = useSelector(state => state.expenses.byId);
    const loanExpenseIds = getExpenseIdsByCategory(expenses, expenseCategories.LAINAT);

    return (
        <StoreProvider store={store}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Eva - OmaBudjetti</Text>
                </View>
                <View style={styles.rectangle}>
                    <Text style={styles.welcomeText}>Lainat ja osamaksut</Text>
                    <View style={styles.divider} />
                    <Text style={styles.infoText}>
                        Lisää tähän kaikki lainojesi kuukausierät{'\n'}
                    </Text>
                    <View style={styles.rowContainer}>
                        <ScrollView>
                            {
                                _.map(loanExpenseIds, id => {
                                    return <ExpenseRow expenseId={id} key={id} />
                                })
                            }
                            <View style={styles.dropdown}>
                                <PrettyDropdownButton onPress={() => console.log('Pressed dropdown')}
                                    title="Lisää kulu"
                                    disabledLeft
                                    iconLeft=""
                                    iconRight="chevron-down"
                                />
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <View style={styles.buttonLeft}>
                        <PrettyNavigationButton onPress={() => navigation.navigate('Travel')}
                            title="Edellinen"
                            disabledRight
                            iconLeft="chevron-left"
                            iconRight=""
                        />
                    </View>
                    <View style={styles.buttonRight}>
                        <PrettyNavigationButton onPress={() => navigation.navigate('Health')}
                            title="Seuraava"
                            disabledLeft
                            iconRight="chevron-right" />
                    </View>
                </View>
            </View>
            <ProgressBar check={3} />
            <BottomNavBar navigation={navigation}/>
        </StoreProvider>
    );
};

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
        marginTop: 40,
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
    infoText: {
        marginTop: 5,
        marginLeft: 30,
        marginRight: 0,
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: 16,
    },
    dropdown: {
        marginTop: 20,
        width: 175
    },
    buttonView: {
        position: 'absolute',
        top: '89%',
        flexDirection: 'row',

    },
    buttonLeft: {
        marginRight: 50,
        width: 175

    },
    buttonRight: {
        width: 175,
        alignContent: 'flex-end',
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
    rowContainer: {
        maxHeight: '34%'
    },
});
